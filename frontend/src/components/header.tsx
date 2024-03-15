import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const closeMobileMenu = () => {
    setShowMobileMenu(false)
  }

  return (
    <header className="absolute z-10 w-full h-16 text-white hover:bg-gray-600 duration-500">
      <nav className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="text-white font-bold text-2xl">
            <Link href="/">银杏的博客</Link>
          </div>
          <div className="hidden md:block h-full">
            <ul className="flex items-center h-full">
              <li className="flex w-20 items-center justify-center h-full hover:bg-gray-700 text-white text-lg">
                <Link href="/">首页</Link>
              </li>
              <li className="flex w-20 items-center justify-center h-full hover:bg-gray-700 text-white text-lg">
                <Link href="/article">文章</Link>
              </li>
              <li className="flex w-20 items-center justify-center h-full hover:bg-gray-700 text-white text-lg">
                <Link href="/poem">诗词</Link>
              </li>
              <li className="flex w-20 items-center justify-center h-full hover:bg-gray-700 text-white text-lg">
                <a href="#">留言</a>
              </li>
              <li className="ml-4 rounded-full overflow-hidden">
                <Image
                  src={'/image/avatar.jpg'}
                  alt="头像"
                  width={40}
                  height={40}
                />
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`mobile-menu fixed inset-y-0 left-0 w-60 bg-gray-900 z-50 transform transition overflow-x-hidden duration-500 ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
        >
          <div className="flex w-full mt-5 text-2xl items-center justify-center">
            你 好
          </div>
          <ul className="mt-4 space-y-4">
            <li>
              <Link
                href="/"
                className="block px-12 pt-10 pb-4 text-white text-xl"
              >
                首页
              </Link>
            </li>
            <li>
              <Link
                href="/article"
                className="block px-12 py-4 text-white text-xl"
              >
                文章
              </Link>
            </li>
            <li>
              <Link
                href="/poem"
                className="block px-12 py-4 text-white text-xl"
              >
                诗词
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-12 py-4 text-white text-xl">
                留言
              </Link>
            </li>
          </ul>
        </div>
        {showMobileMenu && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={closeMobileMenu}
          ></div>
        )}
      </nav>
    </header>
  )
}

export default Header
