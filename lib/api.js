// 特定の公開鍵が以前にアイテムを購入していた場合はtrueを返します
export const hasPurchased = async (publicKey, itemID) => {
    // 公開鍵をパラメータとしてGETリクエストを送信します
    const response = await fetch(`../api/orders?buyer=${publicKey.toString()}`);
    // 応答コードが200の場合
    if (response.status === 200) {
      const json = await response.json();
      console.log("Current wallet's orders are:", json);
      // 注文が存在した場合
      if (json.length > 0) {
        // この購入者とアイテムIDのレコードがあるかどうかを確認します
        const order = json.find((order) => order.buyer === publicKey.toString() && order.itemID === itemID);
        if (order) {
          return true;
        }
      }
    }
    return false;
  };