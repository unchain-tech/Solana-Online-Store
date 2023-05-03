import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useEffect, useState } from 'react';

import CreateProduct from '../components/CreateProduct';
import HeadComponent from '../components/Head';
import Product from '../components/Product';

// 定数を宣言します。
const TWITTER_HANDLE = 'kii_bmi_N_perm';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const { publicKey } = useWallet();
  const isOwner = publicKey
    ? publicKey.toString() === process.env.NEXT_PUBLIC_OWNER_PUBLIC_KEY
    : false;
  const [creating, setCreating] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          console.log('Products', data);
        });
    }
  }, [publicKey]);

  const renderNotConnectedContainer = () => (
    <div>
      <img
        src="https://media.giphy.com/media/FWAcpJsFT9mvrv0e7a/giphy.gif"
        alt="anya"
      />
      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );

  const renderItemBuyContainer = () => (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );

  return (
    <div className="App">
      <HeadComponent />
      <div className="container">
        <header className="header-container">
          <p className="header"> 😳 UNCHAIN Image Store 😈</p>
          <p className="sub-text">
            The only Image store that accepts shitcoins
          </p>

          {isOwner && (
            <button
              className="create-product-button"
              onClick={() => setCreating(!creating)}
            >
              {creating ? 'Close' : 'Create Product'}
            </button>
          )}
        </header>

        <main>
          {creating && <CreateProduct />}
          {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
        </main>

        <div className="footer-container">
          <img
            alt="Twitter Logo"
            className="twitter-logo"
            src="twitter-logo.svg"
          />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
