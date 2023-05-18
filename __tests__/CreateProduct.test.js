import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CreateProduct from '../components/CreateProduct';

jest.mock('ipfs-http-client', () => ({
  create: () => ({
    add: () => ({
      path: 'path',
    }),
  }),
}));

const addedProductMock = () => {
  return Promise.resolve({
    status: 200,
    json: () => Promise.resolve({}),
  });
};

const errorAddedProductMock = () => {
  return Promise.resolve({
    status: 500,
    json: () => Promise.resolve({ error: 'error' }),
  });
};

beforeAll(() => {
  window.alert = jest.fn();
});

describe('CreateProduct', () => {
  it('should added alert when status is 200', async () => {
    /** 準備 */
    /** fetch関数が、successステータスを返すようにモックします */
    global.fetch = jest.fn(() => addedProductMock());

    render(<CreateProduct />);

    const formFileElement = screen.getByPlaceholderText(/Images/i);
    const formNameElement = screen.getByPlaceholderText(/Product Name/i);
    const formPriceElement = screen.getByPlaceholderText(/0.01 USDC/i);
    const formImageUrlElement = screen.getByPlaceholderText(/Image URL/i);
    const formDescriptionElement = screen.getByPlaceholderText(/Description/i);
    const btnElement = screen.getByRole('button', {
      name: /Create Product/i,
    });

    /** 実行 */
    await userEvent.type(formFileElement, 'file');
    await userEvent.type(formNameElement, 'name');
    await userEvent.type(formPriceElement, 'price');
    await userEvent.type(formImageUrlElement, 'imageUrl');
    await userEvent.type(formDescriptionElement, 'description');
    await userEvent.click(btnElement);

    /** 確認 */
    expect(fetch).toBeCalledWith('../api/addProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'name',
        price: 'price',
        imageUrl: 'imageUrl',
        description: 'description',
      }),
    });
    expect(window.alert).toBeCalledWith('Product added!');
  });

  it('should error alert when status is not 200', async () => {
    /** fetch関数が、errorステータスを返すようにモックします */
    global.fetch = jest.fn(() => errorAddedProductMock());
    render(<CreateProduct />);

    const btnElement = screen.getByRole('button', {
      name: /Create Product/i,
    });
    await userEvent.click(btnElement);

    expect(window.alert).toBeCalledWith('Unable to add product: ', 'error');
  });
});
