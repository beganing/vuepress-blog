---
title: 12. 实战案例
date: 2025/02/14
tags:
  - Canvas
categories:
  - 前端
---

## 12.1. 动态时钟

- 表盘，刻度（大刻度、小刻度），时间数字，表针（时针、分针、秒针）
- 表针需要不停的转动
  - 动画绘制
  - 表针角度

```javascript
/* 动静分离, 分两个画布，css样式中设置绝对定位重叠在一块 */
(() => {
  let canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  if (!canvas.getContext) {
    console.log('浏览器版本过低，不支持 canvas，请升级或更换浏览器');
    return;
  }
  canvas.width = 400;
  canvas.height = 400;

  let ctx = canvas.getContext('2d');

  ctx.translate(200, 200);

  /* 绘制圆盘 */
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, 200, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  /* 绘制大刻度 */
  ctx.save();
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 8;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.moveTo(0, -200);
    ctx.lineTo(0, -182);
    ctx.stroke();
    ctx.rotate((Math.PI * 2) / 12);
  }
  ctx.restore();

  /* 绘制小刻度 */
  ctx.save();
  ctx.strokeStyle = '#ddd';
  ctx.lineWidth = 4;
  for (let i = 0; i < 60; i++) {
    if (i % 5 != 0) {
      ctx.beginPath();
      ctx.moveTo(0, -200);
      ctx.lineTo(0, -191);
      ctx.stroke();
    }
    ctx.rotate((Math.PI * 2) / 60);
  }
  ctx.restore();

  canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  if (!canvas.getContext) {
    console.log('浏览器版本过低，不支持 canvas，请升级或更换浏览器');
    return;
  }
  canvas.width = 400;
  canvas.height = 400;

  ctx = canvas.getContext('2d');

  ctx.translate(200, 200);

  (function draw() {
    ctx.clearRect(-200, -200, canvas.width, canvas.height);
    /* 绘制时间数字 */
    ctx.save();
    ctx.font = '20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const r = 165;
    for (let i = 0; i < 12; i++) {
      const text = i === 0 ? 12 : i;
      const x = Math.sin((i * Math.PI * 2) / 12) * r;
      const y = -Math.cos((i * Math.PI * 2) / 12) * r;
      ctx.fillText(text, x, y);
    }
    ctx.restore();

    /* 计算当前时分秒 */
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();
    // console.log(hour, minute, second);

    /* 绘制时针 */
    ctx.save();
    ctx.beginPath();
    ctx.rotate(
      (hour * Math.PI * 2) / 12 +
        (minute * Math.PI * 2) / 60 / 60 +
        (second * Math.PI * 2) / 60 / 60 / 60
    );
    ctx.moveTo(-5, 10);
    ctx.lineTo(-5, -100);
    ctx.quadraticCurveTo(-15, -100, 0, -120);
    ctx.quadraticCurveTo(15, -100, 5, -100);
    ctx.lineTo(5, 10);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    /* 绘制分针 */
    ctx.save();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#aaa';
    ctx.beginPath();
    ctx.rotate((minute * Math.PI * 2) / 60 + (second * Math.PI * 2) / 60 / 60);
    ctx.moveTo(0, 15);
    ctx.lineTo(0, -160);
    ctx.stroke();
    ctx.restore();

    /* 绘制秒针 */
    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#f00';
    ctx.beginPath();
    ctx.rotate((second * Math.PI * 2) / 60);
    ctx.moveTo(0, 20);
    ctx.lineTo(0, -190);
    ctx.stroke();
    ctx.restore();

    /* 绘制圆心点 */
    ctx.save();
    ctx.fillStyle = '#f00';
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    setTimeout(draw, 1000);
  })();
})();
```

> 效果如下：

![alt text](./images/Canvas-12/image1.gif)

## 12.2. 粒子烟花

有两个过程：

- 烟花升空
  - 由多个小球组成一个烟花升空拖尾效果
  - 从上到下，小球半径依次减小，透明度依次增大
  - 上升过程中，整体透明度依次增大
- 烟花爆炸
  - 烟花主体消失
  - 绘制一组小颗粒
  - 沿着圆弧扩散

可以存在多个烟花，升空状态和爆炸状态可以共存。所以需要不断地重新绘制。

涉及的对象：

- 烟花对象
- 小球对象，组成烟花主体
- 粒子对象，爆炸中的粒子

从升空到爆炸：

- 每隔一段时间，升空一个烟花
- 当屏幕中超过三个烟花时，最开始的就可以爆炸了
- 爆炸的时候，烟花主体消失（不再绘制）
- 绘制爆炸后产生的粒子，每次绘制时，改变其位置

```javascript
let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
if (!canvas.getContext) {
  console.log('浏览器版本过低，不支持 canvas，请升级或更换浏览器');
}
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');
ctx.translate(0, canvas.height);
ctx.scale(1, -1);

class Fireworks {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 6;
    this.opacity = 1;
    this.count = 400;
    this.particiles = [];
  }
  // 绘制多个小球
  draw() {
    for (let i = 0; i < 100; i++) {
      let r = this.r - i / 15;
      r = r > 0 ? r : 0;
      this.opacity = this.opacity < 0.2 ? 0.2 : this.opacity;
      const ball = new Ball(
        this.x,
        this.y - i,
        r,
        `rgba(200, 200, 50, ${this.opacity - i / 100})`
      );
      ball.draw();
    }
  }
  bomb() {
    // 绘制爆炸的粒子
    if (this.particiles.length === 0) {
      // 首次绘制
      const hd = (Math.PI * 2) / this.count;
      const color = `rgba(${Math.random() * 256},${Math.random() * 256},${
        Math.random() * 256
      },${Math.random() * 256})`;
      for (let i = 0; i < this.count; i++) {
        const dirx = Math.cos(hd * i) * Math.random() * 4;
        const diry = Math.sin(hd * i) * Math.random() * 4;
        const particile = new Particile(this.x, this.y, dirx, diry, color);
        this.particiles.push(particile);
        particile.draw();
      }
    } else {
      // 已经爆炸的粒子，重绘即可
      this.particiles.forEach((particile) => {
        particile.update();
      });
    }
  }
}

class Ball {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }
  draw() {
    ctx.save();

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

class Particile {
  constructor(x, y, dirx, diry, color) {
    this.x = x;
    this.y = y;
    this.dirx = dirx;
    this.diry = diry;
    this.r = 3;
    this.color = color;
  }
  draw() {
    ctx.save();

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
  update() {
    this.x += this.dirx;
    this.y += this.diry;
    this.dirx *= 0.98;
    this.diry *= 0.98;
    this.draw();
  }
}

const fireworksList = [];
const bombList = [];
let sum = 0;
const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (sum % 150 === 0) {
    const x = (Math.random() * canvas.width * 3) / 4 + canvas.width / 8;
    const y = Math.random() * 100;
    const fire = new Fireworks(x, y);

    fireworksList.push(fire);
  }

  if (fireworksList.length >= 4) {
    const fire = fireworksList.shift();
    bombList.push(fire);
  }

  if (bombList.length >= 4) {
    bombList.shift();
  }

  fireworksList.forEach((fire) => {
    fire.y += 1;
    fire.opacity -= 0.003;
    fire.draw();
  });

  bombList.forEach((fire) => {
    fire.bomb();
  });

  sum++;

  requestAnimationFrame(animate);
};

animate();
```

> 效果如下：

![alt text](./images/Canvas-12/image2.gif)
