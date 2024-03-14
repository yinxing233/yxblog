//进行全局的定制和配置
import React from 'react'
import { AppProps } from 'next/app'
import '../assets/css/index.css' // 导入重置样式表

function YxBlogApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default YxBlogApp
