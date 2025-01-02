---
title: 1. 浏览器渲染流程
date: 2025/01/02
tags:
  - JavaScript
categories:
  - 前端
---

## 1. 解析 _HTML_

浏览器从本地文件或者网络中获取到 _HTML_ 源代码，从上到下依次解析源代码。

若解析过程中，遇到 _css_、_js_ 文件会**暂停解析（阻塞）**，转而等待 _css_、_js_ 文件请求完成、解析完成。之后，继续解析 _HTML_ 文件。

遇到 _img_、_video_、_audio_ 文件，**不会暂停解析**。

- 读取 _HTML_
- 解析 _HTML_
- 读取 _css_
- 解析 _css_
- 解析 _HTML_
- 读取 _js_
- 执行 _js_
- 解析 _HTML_

一般情况下，将 _css_ 引入写在页面开头，_js_ 文件写在页面最后

- 将 _css_ 写在前面，可以让浏览器尽快读取并解析样式，避免用户看到原生的页面，也可以避免页面闪烁（原生样式->自定义样式）
- 将 _js_ 写在最后，可以让页面尽快呈现给用户，然后再执行 _js_ 完成交互功能；当 _HTML_ 未解析完成时，提前用 _js_ 获取不到 _dom_

## 2. 生成 _DOM_ 树

浏览器会一边解析 _HTML_，一边生成 _DOM_ 树，是同步进行的。我们使用 _js_ 获取到的 _DOM_ 就是 _DOM_ 树中的 _DOM_。

- document
  - html
    - head
      - meta
      - title
      - link
    - body
      - h1
      - p
        - Hello World!

当 _DOM_ 树完全生成好之后，会触发 `DOMContentLoaded` 事件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      document.addEventListener('DOMContentLoaded', function () {
        const dom = document.querySelector('h1');
        console.log(1, dom); // <h1>hello world!</h1>
      });

      const dom = document.querySelector('h1');
      console.log(2, dom); // null
    </script>
  </head>
  <body>
    <h1>hello world!</h1>
  </body>
</html>
```