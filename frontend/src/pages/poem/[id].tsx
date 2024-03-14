// pages/poem/[id].tsx

import { useRouter } from 'next/router'

const PoemDetailPage = () => {
  const router = useRouter()
  const { id, content } = router.query // 获取路由参数中的诗词ID和内容

  return (
    <div>
      <h1>Poem Detail</h1>
      <p>Poem ID: {id}</p>
      <p>Poem Content: {content}</p> {/* 显示诗词内容 */}
    </div>
  )
}

export default PoemDetailPage