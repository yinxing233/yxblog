//进行全局的定制和配置
import React from 'react'
import { AppProps } from 'next/app'

//css
import 'tailwindcss/tailwind.css' //引入tailwind
import '../styles/index.css' // 引入重置样式表

//ts
import '../utils/titleChange'

function YxBlogApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default YxBlogApp
