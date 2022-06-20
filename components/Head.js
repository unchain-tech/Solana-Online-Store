import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>Solana Pay</title>
      <meta name="title" content="Solana Pay" />
      <meta name="description" content="Buy items on my store using Solana Pay!" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="#" />
      <meta property="og:title" content="Solana Pay" />
      <meta property="og:description" content="Buy items on my store using Solana Pay!" />
      <meta property="og:image" content="#" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="#" />
      <meta property="twitter:title" content="Solana Pay" />
      <meta property="twitter:description" content="Buy items on my store using Solana Pay!" />
      <meta property="twitter:image" content="#" />
    </Head>
  );
}
