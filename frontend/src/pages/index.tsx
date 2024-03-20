import React from 'react'

import Header from '@/components/header'
import Footer from '@/components/footer'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div
        className="relative bg-cover bg-center w-full h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/image/bg.png')" }}
      >
        <div className="animate__animated animate__fadeInLeft relative mb-8 bg-black bg-opacity-20 p-16 rounded-full">
          <h1 className="mb-4 text-white text-msz text-5xl">如梦令·秋</h1>
          <h5 className="text-white text-msz text-4xl">
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
      </div>
      <Footer />
    </div>
  )
}

export default Home
