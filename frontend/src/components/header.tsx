import React, { useState } from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <header className="absolute z-10 w-full bg-gray-800">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <a href="#">银杏的博客</a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link href="/" className="text-white">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/article" className="text-white">
                  文章
                </Link>
              </li>
              <li>
                <Link href="/poem" className="text-white">
                  诗词
                </Link>
              </li>
              <li>
                <a href="#" className="text-white">
                  联系
                </a>
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
          className={`mobile-menu ${showMobileMenu ? 'block' : 'hidden'} md:hidden`}
        >
          <ul className="mt-4 space-y-4">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                首页
              </Link>
            </li>
            <li>
              <Link
                href="/article"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                文章
              </Link>
            </li>
            <li>
              <Link
                href="/poem"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                诗词
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                联系
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
