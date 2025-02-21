import{_ as n,o as s,c as a,b as e}from"./app-zVI8MIRp.js";const t={},p=e(`<h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li><em>var</em>、<em>let</em>、<em>const</em> 的区别 ? 什么是块级作用域 ? 如何用 ?</li></ul><h2 id="_1-声明变量关键字汇总" tabindex="-1"><a class="header-anchor" href="#_1-声明变量关键字汇总" aria-hidden="true">#</a> 1. 声明变量关键字汇总</h2><p>在 <em>JavaScript</em> 中，一共有 <em>3</em> 种声明变量的方式：</p><ul><li>var</li><li>let</li><li>const</li></ul><p>之所以有 <em>3</em> 种方式，是由于历史原因造成的。最初只有 <em>var</em>，<strong>但是为了解决作用域问题，所以在 <em>ES6</em> 新增了 <em>let</em> 和 <em>const</em> 的方式</strong>。</p><h3 id="_1-1-作用域" tabindex="-1"><a class="header-anchor" href="#_1-1-作用域" aria-hidden="true">#</a> 1.1. 作用域</h3><p>在 <em>ES6</em> 之前，有<strong>全局作用域</strong>和<strong>函数作用域</strong>，在 <em>ES6</em> 种新增了<strong>块级作用域</strong>。块级作用域由 <em>{}</em> 包括，<em>if</em> 语句和 <em>for</em> 语句里面的 <em>{}</em> 也属于块级作用域。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* Globle Scope */</span>
<span class="token comment">// 全局作用域</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数作用域</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> e <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.log(d); // d is not defined</span>
<span class="token comment">// console.log(e); // e is not defined</span>
<span class="token comment">// console.log(f); // f is not defined</span>

<span class="token punctuation">{</span>
  <span class="token comment">// 块级作用域</span>
  <span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> h <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> i <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 7</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 9</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 7</span>
<span class="token comment">// console.log(h); // h is not defined</span>
<span class="token comment">// console.log(i); // i is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-var-关键字" tabindex="-1"><a class="header-anchor" href="#_1-2-var-关键字" aria-hidden="true">#</a> 1.2. var 关键字</h3><h4 id="_1-2-1-没有块级作用域的概念" tabindex="-1"><a class="header-anchor" href="#_1-2-1-没有块级作用域的概念" aria-hidden="true">#</a> 1.2.1. 没有块级作用域的概念</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* Globle Scope */</span>
<span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码，使用 <em>val</em> 在 <em>{}</em> 内定义变量，在 <em>{}</em> 外部也可以访问到，说明 <em>var</em> 声明的变量不存在 <em>Block Scope</em> 的概念。</p><h4 id="_1-2-2-有全局作用域、函数作用域的概念" tabindex="-1"><a class="header-anchor" href="#_1-2-2-有全局作用域、函数作用域的概念" aria-hidden="true">#</a> 1.2.2. 有全局作用域、函数作用域的概念</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* Globle Scope */</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Local Scope</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-3-不初始化值默认为-undefined" tabindex="-1"><a class="header-anchor" href="#_1-2-3-不初始化值默认为-undefined" aria-hidden="true">#</a> 1.2.3. 不初始化值默认为 <em>undefined</em></h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* Globle Scope */</span>
<span class="token keyword">var</span> a<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-4-存在变量提升" tabindex="-1"><a class="header-anchor" href="#_1-2-4-存在变量提升" aria-hidden="true">#</a> 1.2.4. 存在变量提升</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* Globle Scope */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">// 上面的代码相当于</span>
<span class="token keyword">var</span> a<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量提升是因为 <em>js</em> 需要经历编译和执行阶段。在编译阶段，会搜集所有的变量声明并且提前。</p><p>这个过程将所有的声明移动到<strong>各自作用域的最顶端</strong>，被称为<strong>提升</strong>。</p><h4 id="_1-2-5-全局作用域中-var-声明的变量会挂载到-window-对象下" tabindex="-1"><a class="header-anchor" href="#_1-2-5-全局作用域中-var-声明的变量会挂载到-window-对象下" aria-hidden="true">#</a> 1.2.5. 全局作用域中 <em>var</em> 声明的变量会挂载到 <em>window</em> 对象下</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* Globle Scope */</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> k <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-6-同一作用域中允许重复声明" tabindex="-1"><a class="header-anchor" href="#_1-2-6-同一作用域中允许重复声明" aria-hidden="true">#</a> 1.2.6. 同一作用域中允许重复声明</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* Globle Scope */</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同一作用域中，<strong>后面的声明会覆盖前面的声明</strong>。</p><h3 id="_1-3-let-关键字" tabindex="-1"><a class="header-anchor" href="#_1-3-let-关键字" aria-hidden="true">#</a> 1.3. let 关键字</h3><h4 id="_1-3-1-有块级作用域的概念" tabindex="-1"><a class="header-anchor" href="#_1-3-1-有块级作用域的概念" aria-hidden="true">#</a> 1.3.1. 有块级作用域的概念</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">/* Block Scope */</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码执行报错，说明存在 <em>Block Scope</em> 概念。</p><h4 id="_1-3-2-不存在变量提升" tabindex="-1"><a class="header-anchor" href="#_1-3-2-不存在变量提升" aria-hidden="true">#</a> 1.3.2. 不存在变量提升</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">/* Block Scope */</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Cannot access &#39;a&#39; before initialization</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码执行报错，无法在初始化之前访问，说明不存在变量提升。</p><h4 id="_1-3-3-暂时性死区" tabindex="-1"><a class="header-anchor" href="#_1-3-3-暂时性死区" aria-hidden="true">#</a> 1.3.3. 暂时性死区</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(a); // Cannot access &#39;a&#39; before initialization</span>

  <span class="token keyword">let</span> a<span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>

  a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，使用 <em>let</em>/<em>const</em> 声明变量 <em>a</em>，导致绑定这个块级作用域，所以在声明之前，打印变量 <em>a</em> 会报错。</p><p>这是因为使用 <em>let</em>/<em>const</em> 声明的变量会存在暂时性死区。</p><p><em>ES6</em> 规定，<em>let</em>/<em>const</em> 命令会使区块形成封闭的作用域。若在声明之前使用变量，就会报错。总之，在代码块内，使用 <em>let</em>/<em>const</em> 命令声明变量之前，该变量都是不可用的。这在语法上，称为<strong>暂时性死区</strong>（<em>temporal dead zone</em>，简称 <strong><em>TDZ</em></strong>）</p><h4 id="_1-3-4-同一块作用域中不允许重复声明" tabindex="-1"><a class="header-anchor" href="#_1-3-4-同一块作用域中不允许重复声明" aria-hidden="true">#</a> 1.3.4. 同一块作用域中不允许重复声明</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">//Block Scope</span>
  <span class="token keyword">let</span> <span class="token constant">A</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> <span class="token constant">A</span><span class="token punctuation">;</span> <span class="token comment">//SyntaxError: Identifier &#39;A&#39; has already been declared</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token comment">//Block Scope</span>
  <span class="token keyword">var</span> <span class="token constant">A</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token constant">A</span><span class="token punctuation">;</span> <span class="token comment">//SyntaxError: Identifier &#39;A&#39; has already been declared</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token comment">//Block Scope</span>
  <span class="token keyword">let</span> <span class="token constant">A</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token constant">A</span><span class="token punctuation">;</span> <span class="token comment">//SyntaxError: Identifier &#39;A&#39; has already been declared</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-const-关键字" tabindex="-1"><a class="header-anchor" href="#_1-4-const-关键字" aria-hidden="true">#</a> 1.4. const 关键字</h3><h4 id="_1-4-1-必须立即初始化-不能留到后面赋值" tabindex="-1"><a class="header-anchor" href="#_1-4-1-必须立即初始化-不能留到后面赋值" aria-hidden="true">#</a> 1.4.1. 必须立即初始化，不能留到后面赋值</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Block Scope</span>
<span class="token keyword">const</span> a<span class="token punctuation">;</span> <span class="token comment">// SyntaxError: Missing initializer in const declaration }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，用 const 声明的变量 <em>a</em> 没有进行初始化，所以报错。</p><h4 id="_1-4-2-常量的值不能改变" tabindex="-1"><a class="header-anchor" href="#_1-4-2-常量的值不能改变" aria-hidden="true">#</a> 1.4.2. 常量的值不能改变</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//Block Scope</span>
<span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: Assignment to constant variable</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，用 const 声明了变量 a 且初始化为 10，然后试图修改 a 的值，报错。</p><p>const 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。</p><h2 id="_2-特点总结" tabindex="-1"><a class="header-anchor" href="#_2-特点总结" aria-hidden="true">#</a> 2. 特点总结</h2><p><em>var</em> 关键字</p><ul><li>没有块级作用域的概念</li><li>有全局作用域、函数作用域的概念</li><li>不初始化默认值为 <em>undefined</em></li><li>存在变量提升</li><li>全局作用域下用 <em>var</em> 声明的变量会挂载到 <em>window</em> 对象下</li><li>同于作用域中允许重复声明</li></ul><p><em>let</em> 关键字</p><ul><li>有块级作用域的概念</li><li>不存在变量提升</li><li>暂时性死区</li><li>同一块作用域中不允许重复声明</li></ul><p><em>const</em> 关键字</p><ul><li>与 <em>let</em> 一样, 并且有下面 <em>2</em> 个特点</li><li>声明时必须赋值</li><li>不能重复声明</li></ul><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>let const var 的区别 ? 什么是块级作用域 ? 如何用 ?</li></ul><p><em>var</em> 定义的变量，没有块级作用域的概念，可以跨块访问，不能跨函数访问，有变量提升。 <em>let</em> 定义的变量，只能在块级作用域中访问，不能跨块访问，也不能跨函数访问，无变量提升，不可以重复声明。 <em>const</em> 用来定义常量，使用时必须初始化（即必须赋值），也只能在块级作用域中访问，而且不能修改，无变量提升，不可以重复声明。</p><p>最初的 <em>JS</em> 作用域中，只有全局作用域和函数作用域，没有块级作用域的概念。</p><p><em>ES6</em> 中新增了块级作用域。块级作用域由 <em>{}</em> 包括，<em>if</em> 语句和 <em>for</em> 语句中的 <em>{}</em> 也属于块级作用域。</p><p>在之前没有块级作用域的时候，在 <em>if</em> 或者 <em>for</em> 循环中声明的变量会泄露成全局变量，其次就是 <em>{}</em> 中的内层变量可能会覆盖外层变量。块级作用域的出现解决了这些问题。</p>`,61),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","JavaScript-1.html.vue"]]);export{d as default};
