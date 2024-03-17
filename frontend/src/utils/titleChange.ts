//标题变化
let titleTime: ReturnType<typeof setTimeout> | undefined
let originTitle: string

if (typeof window !== 'undefined') {
  originTitle = document.title

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      document.title = 'w(ﾟДﾟ)w 不要走！再看看嘛！'
      clearTimeout(titleTime!)
    } else {
      document.title = '♪(^∇^*)欢迎回来！'
      titleTime = setTimeout(function () {
        document.title = originTitle
      }, 2000)
    }
  })
}
