import React, { useEffect, useState, useMemo } from "react";
import { Keypair, Transaction } from "@solana/web3.js";
import { findReference, FindReferenceError } from "@solana/pay";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import IPFSDownload from "./IpfsDownload";
import { addOrder, hasPurchased, fetchItem } from "../lib/api";

const STATUS = {
  Initial: "Initial",
  Submitted: "Submitted",
  Paid: "Paid",
};

export default function Buy({ itemID }) {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const orderID = useMemo(() => Keypair.generate().publicKey, []); // オーダーを特定するために使われる Public key 

  const [item, setItem] = useState(null); // 購入したアイテムの IPFS ハッシュとファイル名
  const [loading, setLoading] = useState(false); // 上記のすべての状態を読み込んでいます
  const [status, setStatus] = useState(STATUS.Initial); // トランザクションステータスの追跡

  const order = useMemo(
    () => ({
      buyer: publicKey.toString(),
      orderID: orderID.toString(),
      itemID: itemID,
    }),
    [publicKey, orderID, itemID]
  );

  // サーバーからトランザクションオブジェクトをフェッチします（改ざんを回避するために実行されます）
  const processTransaction = async () => {
    setLoading(true);
    const txResponse = await fetch("../api/createTransaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const txData = await txResponse.json();

    const tx = Transaction.from(Buffer.from(txData.transaction, "base64"));
    console.log("Tx data is", tx);
    // トランザクションをネットワークに送信しようとします
    try {
      const txHash = await sendTransaction(tx, connection);
      console.log(`Transaction sent: https://solscan.io/tx/${txHash}?cluster=devnet`);
      setStatus(STATUS.Submitted);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //このアドレスがすでにこのアイテムを購入しているかどうかを確認します
    //そうであれば、アイテムをフェッチして支払いをtrueに設定します
    //UIのブロックを回避する非同期関数
    async function checkPurchased() {
      const purchased = await hasPurchased(publicKey, itemID);
      if (purchased) {
        setStatus(STATUS.Paid);
        const item = await fetchItem(itemID);
        setItem(item);
      }
    }
    checkPurchased();
  }, [publicKey, itemID]);

  useEffect(() => {
    // トランザクションが通っているかどうかを確認します
    if (status === STATUS.Submitted) {
      setLoading(true);
      const interval = setInterval(async () => {
        try {
          const result = await findReference(connection, orderID);
          console.log("Finding tx reference", result.confirmationStatus);
          if (result.confirmationStatus === "confirmed" || result.confirmationStatus === "finalized") {
            clearInterval(interval);
            setStatus(STATUS.Paid);
            addOrder(order);
            setLoading(false);
            alert("Thank you for your purchase!");
          }
        } catch (e) {
          if (e instanceof FindReferenceError) {
            return null;
          }
          console.error("Unknown error", e);
        } finally {
          setLoading(false);
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }

    async function getItem(itemID) {
      const item = await fetchItem(itemID);
      setItem(item);
    }

    if (status === STATUS.Paid) {
      getItem(itemID);
    }
  }, [status]);

  if (!publicKey) {
    return (
      <div>
        <p>You need to connect your wallet to make transactions</p>
      </div>
    );
  }

  if (loading) {
    return <InfinitySpin color="gray" />;
  }

  return (
    <div>
      {/* ハッシュが存在するかどうかに基づいて購入ボタンまたは IPFS Download コンポーネントのいずれかを表示します */}
      {item ? (
        <IPFSDownload hash={item.hash} filename={item.filename} />
      ) : (
        <button disabled={loading} className="buy-button" onClick={processTransaction}>
          Buy now 🠚
        </button>
      )}
    </div>
  );
}