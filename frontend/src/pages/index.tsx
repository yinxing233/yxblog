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
          <h1 className="relative mb-4 text-white text-msz text-5xl">
            如梦令·秋
          </h1>
          <h5 className="relative mb-8 text-white text-msz text-4xl">
            碎影浮光轻巧，
            <br />
            绿水艳阳秋好。
            <br />
            风过偶鸣啾，
            <br />
            许是南归渡鸟。
            <br />
            缥缈，缥缈，
            <br />
            踱步难回年少。
          </h5>
        </div>
      </Content>
      <Content>内容</Content>
      <Footer />
    </div>
  )
}

export default Home
