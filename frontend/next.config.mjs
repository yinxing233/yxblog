/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }, // 主页
      '/article': { page: '/article/article' }, // 诗词列表页面
      '/poem': { page: '/poem/poem' }, // 诗词列表页面
      '/poem/[id]': { page: '/poem/cpns/[id]' }, // 诗词详情页面
    }
  },
}

export default nextConfig
