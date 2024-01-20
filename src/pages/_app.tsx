import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/index.css'

// リファクタ用コメント
const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="app">
      <Head>
        <title>都道府県別 人口推移グラフ</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
