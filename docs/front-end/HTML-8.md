---
title: 8. 页面可见性
date: 2024/12/31
tags:
  - HTML
categories:
  - 前端
---

## 经典真题

- 页面可见性（_Page Visibility_）_API_ 可以有哪些用途？

## 1. 页面可见性介绍

_HTML5_ 中的页面可见性接口提供了一个方法，可以使用 _visibilitychange_ 页面事件来判断当前页面可见性状态，并针对性的执行某些任务。同时还有新的 _document.hidden_ 属性可以使用。

常用的 _API_ 如下：

- **_document.hidden_**：这个新出现的 _document.hidden_ 属性，它显示页面是否为用户当前观看的页面，值为 _true_ 或 _false_。
- **_document.visibilityState_**：有三个值
  - _visible_：表明页面为浏览器当前激活 _tab_，而且窗口不是最小化状态
  - _hidden_：表示页面不是当前激活 _tab_ 页面，或者窗口最小化了
  - _prerender_：表示页面在重新生成，对用户不可见
- **_visibilitychange_**：监听页面可见性变化事件

下面是一个页面可见性具体示例：

```html
<body>
  <p>页面可见性示例</p>
  <script>
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') {
        document.title = '小样去哪儿了？快回来';
      }
      if (document.visibilityState === 'visible') {
        document.title = '页面可见性示例';
      }
    });
  </script>
</body>
```

> 更多可查阅：[页面可见性 _API_](https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API)

## 真题解答

- 页面可见性（_Page Visibility_）_API_ 可以有哪些用途？

  所谓的页面可见性，就是获取当前页面的可见状态。因为对于用户来讲可以打开很多标签页面来回切换，然而始终只有一个页面处于显示状态。所以我们可以通过页面可见性（_Page Visibility_）_API_ 来判断当前页面是显示状态还是隐藏状态。

  常见的用途：

  - 网站有图片轮播效果，只有在用户观看轮播的时候，才会自定展示下一张幻灯片
  - 显示信息仪表盘的应用程序不希望在页面不可见时轮询服务器进行更新
  - 页面想要检测是否正在渲染，以便可以准确的计算网页浏览量
  - 当设备进入待机模式时，网站想要关闭设备声音（用户按下电源键关闭屏幕）
