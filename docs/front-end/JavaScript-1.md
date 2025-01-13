---
title: 1. var、let、const
date: 2025/01/05
tags:
  - JavaScript
categories:
  - 前端
---

## 经典真题

- _var_、_let_、_const_ 的区别 ? 什么是块级作用域 ? 如何用 ?

## 1. 声明变量关键字汇总

在 _JavaScript_ 中，一共有 _3_ 种声明变量的方式：

- var
- let
- const

之所以有 _3_ 种方式，是由于历史原因造成的。最初只有 _var_，**但是为了解决作用域问题，所以在 _ES6_ 新增了 _let_ 和 _const_ 的方式**。

### 1.1. 作用域

在 _ES6_ 之前，有**全局作用域**和**函数作用域**，在 _ES6_ 种新增了**块级作用域**。块级作用域由 _{}_ 包括，_if_ 语句和 _for_ 语句里面的 _{}_ 也属于块级作用域。

```javascript
/* Globle Scope */
// 全局作用域
var a = 1;
let b = 2;
const c = 3;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

function fn() {
  // 函数作用域
  var d = 4;
  let e = 5;
  const f = 6;
  console.log(d); // 4
  console.log(e); // 5
  console.log(f); // 6
}
fn();
// console.log(d); // d is not defined
// console.log(e); // e is not defined
// console.log(f); // f is not defined

{
  // 块级作用域
  var g = 7;
  let h = 8;
  const i = 9;
  console.log(g); // 7
  console.log(h); // 8
  console.log(i); // 9
}
console.log(g); // 7
// console.log(h); // h is not defined
// console.log(i); // i is not defined
```

### 1.2. var 关键字

#### 1.2.1. 没有块级作用域的概念

```javascript
/* Globle Scope */
{
  var a = 1;
}
console.log(a); // 1
```

上述代码，使用 _val_ 在 _{}_ 内定义变量，在 _{}_ 外部也可以访问到，说明 _var_ 声明的变量不存在 _Block Scope_ 的概念。

#### 1.2.2. 有全局作用域、函数作用域的概念

```javascript
/* Globle Scope */
var a = 1;
function fn() {
  // Local Scope
  var b = 2;
  console.log(a); // 1
  console.log(b); // 2
}
fn();
console.log(b); // b is not defined
```

#### 1.2.3. 不初始化值默认为 _undefined_

```javascript
/* Globle Scope */
var a;
console.log(a); // undefined
```

#### 1.2.4. 存在变量提升

```javascript
/* Globle Scope */
console.log(a); // undefined
var a = 10;

// 上面的代码相当于
var a;
console.log(a);
a = 10;
```

变量提升是因为 _js_ 需要经历编译和执行阶段。在编译阶段，会搜集所有的变量声明并且提前。

这个过程将所有的声明移动到**各自作用域的最顶端**，被称为**提升**。

#### 1.2.5. 全局作用域中 _var_ 声明的变量会挂载到 _window_ 对象下

```javascript
/* Globle Scope */
var i = 10;
let j = 11;
const k = 12;
console.log(window.i); // 10
console.log(this.i); // 10
console.log(window.j); // undefined
console.log(window.k); // undefined
```

#### 1.2.6. 同一作用域中允许重复声明

```javascript
/* Globle Scope */
var a = 12;
var a = 13;
console.log(a); // 13
```

同一作用域中，**后面的声明会覆盖前面的声明**。

### 1.3. let 关键字

#### 1.3.1. 有块级作用域的概念

```javascript
{
  /* Block Scope */
  let a = 10;
}
console.log(a); // a is not defined
```

上面代码执行报错，说明存在 _Block Scope_ 概念。

#### 1.3.2. 不存在变量提升

```javascript
{
  /* Block Scope */
  console.log(a); // Cannot access 'a' before initialization
  let a = 10;
}
```

上面代码执行报错，无法在初始化之前访问，说明不存在变量提升。

#### 1.3.3. 暂时性死区

```javascript
if (1) {
  // console.log(a); // Cannot access 'a' before initialization

  let a;

  console.log(a); // undefined

  a = 123;

  console.log(a); // 123
}
```

上面代码中，使用 _let_/_const_ 声明变量 _a_，导致绑定这个块级作用域，所以在声明之前，打印变量 _a_ 会报错。

这是因为使用 _let_/_const_ 声明的变量会存在暂时性死区。

_ES6_ 规定，_let_/_const_ 命令会使区块形成封闭的作用域。若在声明之前使用变量，就会报错。总之，在代码块内，使用 _let_/_const_ 命令声明变量之前，该变量都是不可用的。这在语法上，称为**暂时性死区**（_temporal dead zone_，简称 **_TDZ_**）

#### 1.3.4. 同一块作用域中不允许重复声明

```javascript
{
  //Block Scope
  let A;
  var A; //SyntaxError: Identifier 'A' has already been declared
}
{
  //Block Scope
  var A;
  let A; //SyntaxError: Identifier 'A' has already been declared
}
{
  //Block Scope
  let A;
  let A; //SyntaxError: Identifier 'A' has already been declared
}
```
