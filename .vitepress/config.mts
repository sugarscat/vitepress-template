import { defineConfig } from "vitepress";

const GITHUB_URL = "https://github.com/sugarscat/vitepress-template";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.BASE_URL || "/",
  lang: "en-US",
  title: "Vitepress",
  description: "A VitePress Template",
  head: [["link", { rel: "icon", href: "./favicon.svg" }]],

  rewrites: {
    "en/:rest*": ":rest*",
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  locales: {
    root: { label: "English" },
    "zh-cn": { label: "简体中文" },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "./favicon.svg",

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

    search: {
      provider: "algolia",
      options: {
        appId: "···",
        apiKey: "···",
        indexName: "vitepress-template",
      },
    },

    socialLinks: [{ icon: "github", link: GITHUB_URL }],
  },

  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      const fence = md.renderer.rules.fence!;
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = "root" } = env;
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case "es":
              return "Copiar código";
            case "fa":
              return "کپی کد";
            case "ko":
              return "코드 복사";
            case "pt":
              return "Copiar código";
            case "ru":
              return "Скопировать код";
            case "zhCN":
              return "复制代码";
            default:
              return "Copy code";
          }
        })();
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        );
      };
    },
    image: {
      // false by default; Set to true to enable lazy loading for all images.
      lazyLoading: true,
    },
  },
});
