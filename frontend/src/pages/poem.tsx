// pages/poem.tsx
import Header from '@/components/header'
import WaveArea from '@/components/waveArea'
import Footer from '@/components/footer'
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
      <Header />
      <main className="pt-20">
        <h1>Poem List</h1>
        <h1>Poem List</h1>
        <h1>Poem List</h1>
        <h1>Poem List</h1>
        <h1>
          Poem List<WaveArea></WaveArea>
        </h1>
        <ul className="z-10">
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
      </main>
      <Footer />
    </div>
  )
}

export default PoemListPage
