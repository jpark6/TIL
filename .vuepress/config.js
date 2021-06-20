const { description } = require('../package.json')
const getSideBar  = require("./sidebar")
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'JPark\'s TIL',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "./icon/180.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "./icon/32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "./icon/16.png"}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Git Repo',
        link: 'https://github.com/jpark6',
      },
      { text: 'Mail',
        link: 'mailto://qkstjr09@gmail.com',
      },
      {
        text: 'blog',
        link: 'https://jpark6.github.io'
      }
    ],
    sidebar: getSideBar("./"),
    sidebarDepth: 3,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  markdown: {
    lineNumbers: true
  }
  
}
