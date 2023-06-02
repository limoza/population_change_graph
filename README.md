# 都道府県別 人口推移グラフ

## サイト URL

- https://population-change-graph-cd2uageci-limoza.vercel.app/app

## セットアップ

1. リポジトリをクローン

```
git clone git@github.com:limoza/population_change_graph.git
```

2. install

```
yarn install
```

3. API KEY の設定
   root 直下に`.env.development.local`を作成し、以下の内容を記載。
   値はご自身の API キーをご記載ください。

```
NEXT_PUBLIC_REASAS_API_KEY = 'xxx'
```

## 開発

### Start

```zsh
yarn dev
```

### Jest Test

```zsh
yarn jest
```

## 作業ログ

### 所要時間

- n 分

### 参考文献,URL

- Next.js, TypeScript, ESLint, Prettier
  - https://qiita.com/itachi/items/05fbe67c7168703a34e7
  - https://blog.monorevo.jp/post-2104
- Highcharts
  - https://github.com/highcharts/highcharts-react
  - https://www.highcharts.com/demo/line-basic
  - https://api.highcharts.com/highcharts/
- useSWR
  - https://swr.vercel.app/ja/docs/mutation
  - https://dev.classmethod.jp/articles/useswr-useswrmutation/
  - https://swr.vercel.app/docs/middleware
  - https://zenn.dev/terrierscript/articles/2021-12-08-swr-middleware-non-mock-test
- API KEY
  - https://www.snorerelax.com/posts/tech-vercel-environment/
- HTML
  - HTML 解体新書-仕様から紐解く本格入門
    - https://amzn.asia/d/33dwbuM
- Jest、テスト
  - https://nishinatoshiharu.com/install-jest-in-next/
  - フロントエンド開発のためのテスト入門 今からでも知っておきたい自動テスト戦略の必須知識
    - https://amzn.asia/d/9vNtoSK
