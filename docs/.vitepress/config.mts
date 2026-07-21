import { defineConfig } from 'vitepress'

const isPages = process.env.DOCS_TARGET !== 'self-hosted'

export default defineConfig({
  lang: 'zh-CN',
  title: 'SIFT Map Tracker',
  description: 'SIFT Map Tracker 玩家手册与贡献者文档',
  base: isPages ? '/SiftMapTracker.Wiki/' : '/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#72c94c' }],
    ['link', { rel: 'icon', href: `${isPages ? '/SiftMapTracker.Wiki' : ''}/brand/logo.png` }]
  ],
  themeConfig: {
    logo: '/brand/logo.png',
    siteTitle: 'SIFT Map Tracker',
    nav: [
      { text: '快速开始', link: '/getting-started/' },
      { text: '功能指南', link: '/tracking/' },
      { text: '故障排查', link: '/troubleshooting/' },
      { text: '路线分享站', link: 'https://www.mapforge.top/packs' }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '文档首页', link: '/' },
          { text: '下载与安装', link: '/getting-started/install' },
          { text: '首次启动', link: '/getting-started/first-run' },
          { text: '五分钟快速开始', link: '/getting-started/' }
        ]
      },
      {
        text: '定位与导航',
        items: [
          { text: '追踪定位', link: '/tracking/' },
          { text: '算法与参数', link: '/tracking/algorithms' },
          { text: '路线导航', link: '/navigation/' },
          { text: 'HUD 与灵动岛', link: '/navigation/hud' },
          { text: '导航总览', link: '/navigation/overview' }
        ]
      },
      {
        text: '编辑与拓展',
        items: [
          { text: '路线编辑', link: '/editors/routes' },
          { text: '资源点编辑', link: '/editors/resources' },
          { text: '地图标记', link: '/editors/survey-map' },
          { text: '功能拓展', link: '/extensions/' },
          { text: '定位风险图', link: '/extensions/localization-risk' }
        ]
      },
      {
        text: '设置与支持',
        items: [
          { text: '设置说明', link: '/settings/' },
          { text: '快捷键', link: '/settings/hotkeys' },
          { text: '更新、公告与数据', link: '/settings/updates' },
          { text: '故障排查', link: '/troubleshooting/' },
          { text: '反馈问题', link: '/troubleshooting/report' }
        ]
      },
      {
        text: '贡献者',
        collapsed: true,
        items: [
          { text: '项目结构与构建', link: '/contributors/' },
          { text: '数据格式', link: '/contributors/data-formats' },
          { text: '版本记录', link: '/releases/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagaciouness/SiftMapTracker.Client' }
    ],
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/sagaciouness/SiftMapTracker.Wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdated: { text: '最后更新' },
    docFooter: { prev: '上一页', next: '下一页' },
    outline: { label: '本页内容', level: [2, 3] },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    footer: {
      message: '免费发布，仅供学习交流，禁止用于商业用途',
      copyright: '© 2026 B站 sicuncat / 抖音 偏差'
    }
  },
  markdown: {
    image: { lazyLoading: true }
  }
})

