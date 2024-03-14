/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }, // 主页
      '/poem': { page: '/poem' }, // 诗词列表页面
      '/poem/[id]': { page: '/poem/[id]' }, // 诗词详情页面
    }
  },
}

export default nextConfig
