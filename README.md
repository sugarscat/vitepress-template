# Vitepress

VitePress is a Vite-powered static site generator.

[Read the docs](https://vitepress.dev/)

## Usage

> [!IMPORTANT]
>
> **Documents to be revised**
>
> 1. `.vitepress/config.mts`
>
> - Replace the `gitLink` value with the address of your GitHub repository.
> - Please modify the Algolia configuration below:
>     ```txt
>     themeConfig: {
>       search: {
>         provider: 'algolia',
>         options: {
>           appId: '···',
>           apiKey: '···',
>           indexName: 'vitepress-template',
>         }
>        },
>       }
>     }
>     ```
>
> 2. `crawler.json`
>
> - Change `index_name` to the name of your Algolia index.
> - Modify `start_urls` to your online web address.
>
> 3. `.github/workflows/algolia.yml`
>
> - See the documentation to configure `Github Actions Secrets` yourself.

> [!TIP]
>
> You need to have [pnpm](https://pnpm.io/) installed globally.

Install dependencies:

```bash
pnpm i
```

Preview:

```bash
pnpm run docs:dev
```

Build:

```bash
pnpm run docs:build
```
