import React from 'react'
import Link from 'next/link'
const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App!</h1>
      <p>This is the homepage of my Next.js app.</p>
      <ul>
        <li>
          <Link href="/article">文章</Link>
        </li>
        <li>
          <Link href="/poem">诗词</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
