# Solana Online Store(prototype)

![](https://i.imgur.com/R6ehjLp.png)

## 実行方法（Solana devnet）

### 1. 本リポジトリのクローン

```bash
git clone git@github.com:unchain-tech/Solana-Online-Store.git
```

### 2. パッケージのインストール

```bash
yarn install
```

### 3. .env ファイルの作成

```bash
cp .env.example .env
```

Phantom Wallet のネットワークを`devnet`に設定します。

作成した`.env`ファイルに、Phantom Wallet のアドレスを記入してください。

### 4. 開発サーバーの起動

```bash
yarn dev
```

ターミナル上に表示された URL にアクセスしましょう。

## 設定

### Git Hooks

```
yarn install
yarn simple-git-hooks
```
