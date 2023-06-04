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

## テストケース

### 初期表示時

- [ ] PC/SP で表示崩れを起こしていない
- [ ] 「都道府県別 人口推移グラフ」のタイトルが表示されている
- [ ] 「都道府県一覧」のタイトルが表示されている
- [ ] 47 都道府県のボタンが表示されている
- [ ] 区分選択は総人口が選択されている
- [ ] 区分選択で「総人口」が選択できる状態である
- [ ] 区分選択で「年少人口」が選択できる状態である
- [ ] 区分選択で「生産年齢人口」が選択できる状態である
- [ ] 区分選択で「老年人口」が選択できる状態である
- [ ] 「都道府県を選択してください」とエンプティーステートが表示されている

### 挙動

- [ ] 都道府県ボタンを一度押下すると、選択状態(背景色が青)となる
- [ ] 選択状態時に選択したボタンを押下すると、未選択状態(背景色がグレー)に戻る
- [ ] 都道府県ボタンを押下すると、選択した都道府県のチャートが表示される
- [ ] 選択状態時に選択したボタンを押下すると、選択した都道府県のチャートが表示されなくなる
- [ ] 一つしか選択していない状態で、選択したボタンを押下すると、エンプティーステートが表示される
- [ ] 区分選択を変更すると、チャートの内容も同時に変更される

### アクセシビリティ

- [ ] axe DevTools で TOTAL ISSUES が 0 である
  - [axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
  - 参考サイト(https://a11y-guidelines.freee.co.jp/explanations/axe.html)

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
