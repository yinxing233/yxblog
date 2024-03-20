// pages/poem/[id].tsx
import { useRouter } from 'next/router'

import Header from '@/components/header'
import Footer from '@/components/footer'

const PoemDetailPage = () => {
  const router = useRouter()
  const { poemTitle, poemText } = router.query // 获取路由参数中的诗词ID和内容

  return (
    <div>
      <Header />
      <div className="h-20">top banners</div>
      <h1>Poem Detail</h1>
      <p>{poemTitle} </p>
      <p>Poem Content: {poemText}</p> {/* 显示诗词内容 */}
      <Footer />
    </div>
  )
}

export default PoemDetailPage
