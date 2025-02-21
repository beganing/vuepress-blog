---
title: 2. JS 中的数据类型
date: 2025/01/16
tags:
  - JavaScript
categories:
  - 前端
---

## 经典真题

- _JS_ 中的数据类型有哪些？基本类型和引用类型的区别是什么？

## 1. 简单值和复杂值

_JS_ 的数据类型就分为两大类：

- 简单值（基本类型、原始类型）
- 复杂值（引用类型、引用值）

### 1.1. 简单值

一共有 _7_ 种：

- _number_ 数字
- _string_ 字符串
- _boolean_ 布尔值
- _null_ 空值
- _undefined_ 未定义
- _symbol_ 符号
- _bigint_ 大数

所谓简单值，是因为**这些类型的值，无法再继续往下拆分**。

#### 1.1.1. 注意

1. **_symbol_** 和 **_bigint_**

   - 这两个数据类型是从 _ES6_ 开始新增的。
   - _symbol_ 主要用于**创建唯一的标识符**。_symbol_ 的值是唯一且不可变的，适用于作为对象属性的键，以及保证不会与其他属性键发生冲突，特别是在多人合作的大型项目中或着是用第三方库的时候。
   - _bigint_ 是一个新增的基础数据类型，它于 _ECMAScript 2020_（_ES11_）中被正式添加到语言标准中。_bigint_ 数据类型用于表示大于 `Number.MAX_SAFE_INTERGER`（即 `2^53 - 1`）或小于 `Number.MIN_SAFE_INTERGER`（即 `-2^53 + 1`）的整数。这个类型**提供了一种在 _JS_ 中安全处理非常大的整数的方法**，这在之前的 _JS_ 版本中是不可能的。这种类型非常适合用于在金融、科学计算和加密等领域。

2. **_null_** 和 **_undefined_**

> 问题 1：为什么 _null_ 的数据类型打印出来是 _object_ ?

```javascript
console.log(null); // object
console.log(undefined); // undefined
```

这是 _JS_ 从第一个版本开始时，**设计上的一个遗留问题**。最初的 _JS_ 语言实现是在 _1995_ 年由 _Brendan Eich_ 在 _Netscape Navigator_ 中设计的。在 _JS_ 最初的版本中，**数据类型是使用底层的位模式来标识的，每种数据类型的前几位是用来表示类型信息的**。例如，**对象的类型标记通常以 _00_ 开头**，而由于一个历史错误，**_null_ 被表示为全零（_00000000_）**，这就使得 _null_ 的类型检查结果与对象一致。

虽然这个行为在技术上是不正确的（因为 _null_ 既不是对象也不包含任何属性），但改变这个行为可能会破坏大量现存的 _Web_ 页面和应用。因此，尽管这是一个众所周知的问题，但由于向后兼容性的考虑，这个设计决策一直未被修改。

不仅没有被修改，这个行为目前还被 _ECMAScript_ 标准所采纳，成为了规范的一部分，所有遵循 _ECMAScript_ 标准的 _JS_ 实现都默认在 _typeof null_ 时返回 _object_。

> 问题 2：为什么 _undefined_ 和 _null_ 明明是两种基础数据类型，但 `undefined == null` 返回的是 `true` ?

```javascript
console.log(undefined == null); // true
console.log(undefined === null); // false
```

这是由语言规范决定的。

- `undefined` 表示变量未定义或未赋值，而 `null` 表示变量已定义但值为空。尽管含义不同，但它们都表示 “无值” 状态，因此在某些情况下可以互换。

- 在非严格相等比较（==）中，_JavaScript_ 会进行隐式类型转换。根据规范，`undefined` 和 `null` 在比较时都不会转换为其他类型，且它们都被认为是 “假值”，因此 `undefined == null` 返回 `true`。

- 根据 _ECMAScript_ 规范，`undefined == null` 是明确规定的行为。

注意：

- 使用严格相等（===）时，`undefined` 和 `null` 不相等，因为它们的类型不同（`undefined` 是 `undefined` 类型，`null` 是 `object` 类型）。

目前，关于 `null` 和 `undefined` 的一些区别：

- `null`：表示一个明确的 "空值" 或 "无对象" 的占位符。
  - 显式地将一个变量设置为 "空值"。
  - 作为函数地返回值，表示 "无结果" 或 "无对象"。
  - 作为对象属性的值，表示该属性为 "空"。如原型链的终点。
  - 转为数值时会被转换为 `0`。
- `undefined`：表示变量已声明但未赋值，或者访问对象中不存在的属性。
  - 变量声明但未初始化时，默认值为 `undefined`。
  - 函数没有明确返回值时，默认返回 `undefined`。
  - 访问对象中不存在的属性时，返回 `undefined`。
  - 转为数值时值为 `NaN`。

### 1.2. 复杂值

就一种：

- _object_

之所以称为复杂值，就是因为**这种类型的值可以继续往下拆分**，分为多个简单值或复杂值。

**数组、函数、正则这些统统都是对象类型，属于复杂值**。

```javascript
console.log(typeof []); // object
console.log(typeof function () {}); // function
console.log(typeof /ab/); // object
```

**函数的本质也是对象**。可以添加属性和方法。

```javascript
function fun() {}

fun.a = 'aaaa';
fun.test = function () {
  console.log('this is a test function');
};

console.log(fun.a); // aaaa
fun.test(); // this is a test function
```

在函数内部，有一个特别的内部属性 `[[Call]]`，这属于内部代码，开发者层面是没有办法调用的。**有了这个属性之后，表示这个对象是可以被调用**。

因为函数是可调用的对象，为了区分**普通对象**和**函数对象**，当我们用 `typeof` 操作符检测一个函数时，返回的是 `function`。

正因为这种设计，所以 _JS_ 中能够实现高阶函数。高阶函数定义如下（满足一个条件即可）：

- 接受一个或多个函数作为输入。
- 输出一个函数。

因为在 _JS_ 中，函数的本质就是对象，所以可以像普通对象一样，作为参数或返回值进行传递。
