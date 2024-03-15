import React from 'react'

import Header from '@/components/header'
import Content from '@/components/content'
import Footer from '@/components/footer'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Content>
        <div
          className="relative bg-cover bg-center w-full h-screen flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/image/bg.png')" }}
        >
          <h1 className="relative mb-8 text-white text-maoti text-5xl ">
            终揽月·济寰宇
          </h1>
          <h5 className="relative mb-8 text-white text-xl ">
            测试测试测试测，测试测试测试测。
          </h5>
          <span className="absolute bottom-0 left-0 text-white opacity-30 text-xs">
            背景图：花铭
          </span>
        </div>
      </Content>
      <Content>asd</Content>
      <Footer />
    </div>
  )
}

export default Home
