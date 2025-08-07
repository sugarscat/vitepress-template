import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Vitepress",
  description: "A VitePress Template",
  lastUpdated: true,
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/:user:/:rope:" }],
  },

  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
    },
    image: {
      // false by default; Set to true to enable lazy loading for all images.
      lazyLoading: true,
    },
  },
});
