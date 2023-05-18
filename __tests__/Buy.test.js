import { Transaction } from '@solana/web3.js';
import { waitFor } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Buy from '../components/Buy';
import { fetchItem, hasPurchased } from '../lib/api';

const sendTransactionMock = jest.fn();
jest.mock('@solana/wallet-adapter-react', () => ({
  ...jest.requireActual('@solana/wallet-adapter-react'),
  useConnection: () => ({
    connection: 'connection',
  }),
  useWallet: () => ({
    publicKey: 'publicKey',
    sendTransaction: sendTransactionMock,
  }),
}));

jest.mock('@solana/web3.js', () => ({
  ...jest.requireActual('@solana/web3.js'),
  Keypair: {
    generate: () => ({
      publicKey: 'orderID',
    }),
  },
  Transaction: {
    from: jest.fn(),
  },
}));

jest.mock('../lib/api', () => ({
  fetchItem: jest.fn(),
  hasPurchased: jest.fn(),
}));

const createTransactionMock = () => {
  return Promise.resolve({
    status: 200,
    json: () =>
      Promise.resolve({
        transaction: 'transaction',
      }),
  });
};

describe('Buy', () => {
  it('should render buy button when product is not purchased', async () => {
    /** hasPurchased関数をモックして、未購入を示す`false`を返すようにする */
    hasPurchased.mockResolvedValue(false);
    render(<Buy itemID={1} />);

    const btnElement = screen.getByRole('button', {
      name: /Buy now/i,
    });

    expect(btnElement).toBeInTheDocument();
  });

  it('should not render buy button when product is purchased', async () => {
    /** hasPurchased関数をモックして、購入済みを示す`true`を返すようにする */
    hasPurchased.mockResolvedValue(true);
    fetchItem.mockResolvedValue({ hash: 'hash', filename: 'filename' });

    render(<Buy itemID={1} />);

    await waitFor(() => {
      const btnElement = screen.queryByRole('button', {
        name: /Buy now/i,
      });
      expect(btnElement).not.toBeInTheDocument();
    });
  });

  it('should call sendTransaction when buy button is clicked', async () => {
    /** 準備 */
    /** 関数の戻り値にダミーの値を設定する */
    global.fetch = jest.fn(() => createTransactionMock());
    hasPurchased.mockResolvedValue(false);
    Transaction.from.mockReturnValue('mockTx');

    render(<Buy itemID={1} />);

    const btnElement = screen.getByRole('button', {
      name: /Buy now/i,
    });

    /** 実行 */
    await userEvent.click(btnElement);

    /** 確認 */
    /** 期待する引数で関数が実行されているかを確認します */
    expect(fetch).toBeCalledWith('../api/createTransaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        buyer: 'publicKey',
        orderID: 'orderID',
        itemID: 1,
      }),
    });
    expect(sendTransactionMock).toBeCalledWith('mockTx', 'connection');
  });
});