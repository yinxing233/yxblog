import React, { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa' // 导入箭头图标

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // 监听滚动事件，根据页面滚动位置来显示或隐藏按钮
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // 滚动到页面顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // 添加滚动事件监听器
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-10 right-10 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-800 focus:outline-none"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton
