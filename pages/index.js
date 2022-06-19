import React from "react";
import HeadComponent from '../components/Head';

const TWITTER_HANDLE = "kii_bmi_N_perm";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"> 😳 UNCHAIN Image Store 😈</p>
          <p className="sub-text">The only Image store that accepts shitcoins</p>
        </header>

        <main>
          <img src="https://media.giphy.com/media/FWAcpJsFT9mvrv0e7a/giphy.gif" alt="anya" />
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
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
