---
title: 2. 画布与画笔
date: 2025/02/10
tags:
  - Canvas
categories:
  - 前端
---

## 2.1. 创建画布与画笔

提供一个 `canvas` 标签

有一个 _canvas_ 对象

有一个 _context_ 对象（_CanvasRenderingContext2D_）

> 有两种创建方式：

- 直接定义 `canvas` 标签
- 利用 _js_ 创建 `canvas` 标签（推荐，vscode 有更友好的提示）

```html
<body>
  <canvas id="c1"> 浏览器版本过低，不支持 canvas，请升级或更换浏览器 </canvas>

  <script>
    /* 
      方式1: 直接编写 canvas 标签
    */
    const canvas1 = document.querySelector('#c1');
    const context1 = canvas.getContext('2d'); // 获取2d绘图上下文

    /* 
      方式2: 使用 js 创建 canvas 标签（推荐，vscode 有更友好的提示）
    */
    const canvas2 = document.createElement('canvas');
    document.body.append(canvas2);
    if (!canvas2.getContext) {
      console.log('浏览器版本过低，不支持 canvas，请升级或更换浏览器');
      return;
    }
    const context2 = canvas2.getContext('2d');
  </script>
</body>
```

> `canvas` 标签的版本检查

- 绝大多数的浏览器都支持 `canvas`。少数浏览器支持不佳（IE9-）
- 使用文本/图片替换 `canvas`、脚本检测（见上面的代码）

## 2.2. 画布区域特点

- `canvas` 是一个行内元素，和 `img` 类似。`canvas` 是绘制出一个图片，`img` 是引入一个图片，最终的显示效果一样。
- `canvas` 可以使用 _width_ 和 _height_ 设置区域宽高。（默认 300 x 150）（行内元素可以设置宽高的特殊情况）
- `canvas` 也可以使用 _style_ 样式设置宽高，但与 _width_ 和 _height_ 设置效果有所不同。

### 2.2.1. 坐标系

每一个画布都有一个坐标系统，画布的左上角为默认的（0, 0）原点。

### 2.2.2. 画布区域

使用 _width_ 和 _height_ 属性控制的区域。这个区域有多大，其包含的坐标系就有多大。

`<canvas id="c1" width="400" height="400"></canvas>`

表示我们可以看到一个 _400x400_ 的坐标系。

### 2.2.3. 放置区域

使用 _style_ 样式控制区域大小，画布区域绘制的图形，最终会在放置区域种展示。

默认放置区域与画布区域相同。

放置区域如果比画布区域大/小，画布中的图形就会按比例放大/缩小（图像失真）。
