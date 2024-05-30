import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web-Note",
  base: "/vitepress-note",
  description: "前端学习笔记",
  head: [["link", { rel: "icon", href: "/icons8-run.gif" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "icons8-run.gif",
    nav: [
      {
        text: "前端",
        collapsed: false,
        items: [
          { text: "JavaScript", link: "/front-end/js/index" },
          { text: "Vue", link: "/front-end/vue/index" },
        ],
      },
      {
        text: "Home",
        link: "/",
      },
    ],

    sidebar: [
      {
        text: "JavaScript",
        collapsed: false,
        items: [{ text: "JavaScript高级", link: "/front-end/js/base.md" }],
      },
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLable: "搜索文档",
          },
          modal: {
            onRelutsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Evan You",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
})
