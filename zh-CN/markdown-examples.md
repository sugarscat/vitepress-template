# Markdown 扩展示例

本页展示了 VitePress 提供的一些内置标记扩展。

## 语法高亮

VitePress 提供由 [Shiki](https://github.com/shikijs/shiki)提供的语法高亮功能，以及行高亮等附加功能：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 定制容器

**输入**

```md
::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险的警告。
:::

::: details
这是一个细节区块。
:::
```

**输出**

::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险的警告。
:::

::: details
这是一个细节区块。
:::

## 更多信息

查看[完整的 markdown 扩展列表](https://vitepress.dev/guide/markdown)的文档。
