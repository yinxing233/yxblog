// pages/poem.tsx

import Link from 'next/link'

// 模拟诗词数据
const poems = [
  { id: '1', title: '诗词1', content: '诗词1的内容...' },
  { id: '2', title: '诗词2', content: '诗词2的内容...' },
  // 其他诗词数据...
]

const PoemListPage = () => {
  return (
    <div>
      <h1>Poem List</h1>
      <ul>
        {poems.map((poem) => (
          <li key={poem.id}>
            {/* 将整个诗词对象传递给诗词详情页面 */}
            <Link
              href={{
                pathname: '/poem/[id]',
                query: { id: poem.id, content: poem.content },
              }}
            >
              {poem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PoemListPage
