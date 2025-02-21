import{_ as t,r as e,o,c as r,d as n,e as a,f as p,b as l}from"./app-zVI8MIRp.js";const c="/vuepress-blog/assets/image1-4ZfBirZh.png",i="/vuepress-blog/assets/image2-qJGkmKHw.png",u={},k=l(`<h2 id="_1-设置map的maxzoom" tabindex="-1"><a class="header-anchor" href="#_1-设置map的maxzoom" aria-hidden="true">#</a> 1. 设置<code>map</code>的<code>maxZoom</code></h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxZoom</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span><span class="token comment">//最大空间等级</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>            
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-设置图层的tileinfo" tabindex="-1"><a class="header-anchor" href="#_2-设置图层的tileinfo" aria-hidden="true">#</a> 2. 设置图层的<code>tileInfo</code></h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> tileInfo2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TileInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;rows&quot;</span><span class="token operator">:</span><span class="token number">256</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;cols&quot;</span><span class="token operator">:</span><span class="token number">256</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;origin&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;point&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">20037508.342787</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">20037508.342787</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;spatialReference&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">&quot;wkid&quot;</span><span class="token operator">:</span><span class="token number">102100</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">spatialReference</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">wkid</span><span class="token operator">:</span> <span class="token number">102100</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;lods&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">156543.033928</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">591657527.591555</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">256</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">78271.5169639999</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">295828763.795777</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token number">512</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">39135.7584820001</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">147914381.897889</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">4</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token number">1024</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">19567.8792409999</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">73957190.948944</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">8</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">7</span><span class="token punctuation">,</span>
                <span class="token number">2048</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">9783.93962049996</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">36978595.474472</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">15</span><span class="token punctuation">,</span>
                <span class="token number">4096</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">4891.96981024998</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">18489297.737236</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">31</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">31</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">32</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">31</span><span class="token punctuation">,</span>
                <span class="token number">8192</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">2445.98490512499</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">9244648.868618</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">63</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">63</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">63</span><span class="token punctuation">,</span>
                <span class="token number">16384</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">1222.99245256249</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">4622324.434309</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">127</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">127</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">127</span><span class="token punctuation">,</span>
                <span class="token number">32768</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">611.49622628138</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">2311162.217155</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">255</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">255</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">256</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">255</span><span class="token punctuation">,</span>
                <span class="token number">65536</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">9</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">305.748113140558</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">1155581.108577</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">512</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">512</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">512</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">511</span><span class="token punctuation">,</span>
                <span class="token number">131072</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">152.874056570411</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">577790.554289</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">1023</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">1023</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">1024</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">1023</span><span class="token punctuation">,</span>
                <span class="token number">262144</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">76.4370282850732</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">288895.277144</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">2048</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">2048</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">2048</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">2047</span><span class="token punctuation">,</span>
                <span class="token number">524288</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">38.2185141425366</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">144447.638572</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">4096</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">4096</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">4096</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">4095</span><span class="token punctuation">,</span>
                <span class="token number">1048576</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">19.1092570712683</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">72223.819286</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">8192</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">8192</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">8192</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">8191</span><span class="token punctuation">,</span>
                <span class="token number">2097152</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">14</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">9.55462853563415</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">36111.909643</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">16384</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">16384</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">16384</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">16383</span><span class="token punctuation">,</span>
                <span class="token number">4194304</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">4.77731426794937</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">18055.954822</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">32767</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">32767</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">32768</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">32767</span><span class="token punctuation">,</span>
                <span class="token number">8388608</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">16</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">2.38865713397468</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">9027.977411</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">65535</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">65535</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">65536</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">65535</span><span class="token punctuation">,</span>
                <span class="token number">16777216</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">17</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">1.19432856685505</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">4513.988705</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">131072</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">131072</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">131072</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">131071</span><span class="token punctuation">,</span>
                <span class="token number">33554432</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">0.597164283559817</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">2256.994353</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">262143</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">262143</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">262144</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">262143</span><span class="token punctuation">,</span>
                <span class="token number">67108864</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">0.298582141647617</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">1128.497176</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">524288</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">524288</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">524288</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">524287</span><span class="token punctuation">,</span>
                <span class="token number">134217728</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">0.14929107088995425</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">564.248588</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">1048576</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">1048576</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">1048576</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">1048576</span><span class="token punctuation">,</span>
                <span class="token number">268435456</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">0.07464553544497712</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">282.124294</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">2097152</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">2097152</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">2097152</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">2097152</span><span class="token punctuation">,</span>
                <span class="token number">536870912</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;level&quot;</span><span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">0.03732276772248856</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;scale&quot;</span><span class="token operator">:</span><span class="token number">141.062147</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileRow&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;startTileCol&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileRow&quot;</span><span class="token operator">:</span><span class="token number">4194304</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;endTileCol&quot;</span><span class="token operator">:</span><span class="token number">4194304</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;_frameInfo&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token number">4194304</span><span class="token punctuation">,</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token number">4194304</span><span class="token punctuation">,</span>
                <span class="token number">1073741824</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;width&quot;</span><span class="token operator">:</span><span class="token number">256</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;height&quot;</span><span class="token operator">:</span><span class="token number">256</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxzoom</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minzoom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">subDomains</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;t0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;t1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;t2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;t3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;t4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;t5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;t6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;t7&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tileInfo</span><span class="token operator">:</span> tileInfo<span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> layer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebTiledLayer</span><span class="token punctuation">(</span><span class="token string">&#39;http://{subDomain}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&amp;REQUEST=GetTile&amp;VERSION=1.0.0&amp;LAYER=vec&amp;STYLE=default&amp;TILEMATRIXSET=w&amp;FORMAT=tiles&amp;TILECOL={col}&amp;TILEROW={row}&amp;TILEMATRIX={level}&amp;tk=5e6b50c26b65e5cc974c9765758f753b&#39;</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-修改gettileurl方法" tabindex="-1"><a class="header-anchor" href="#_3-修改gettileurl方法" aria-hidden="true">#</a> 3. 修改<code>getTileUrl</code>方法</h2><p><code>esri-&gt;layers-&gt;WebTiledLayer</code> 找到源码, 找到<code>getTileUrl</code>方法</p><p>在请求瓦片前, 进行判断, 如果<code>zoom&gt;18</code>就不再发送请求, 直接<code>return</code></p><p><img src="`+c+'" alt="alt text"></p><h2 id="_4-修改init-js文件" tabindex="-1"><a class="header-anchor" href="#_4-修改init-js文件" aria-hidden="true">#</a> 4. 修改<code>init.js</code>文件</h2><p>在<code>init.js</code>文件中找到<code>_onExtentChangeHandler</code>方法, 内部调用清理瓦片的方法<code>_cleanUpRemovedImages</code>,需要添加条件, 在<code>zoom&lt;=18</code>时执行此方法。</p><p><img src="'+i+'" alt="alt text"></p><h2 id="_5-参考" tabindex="-1"><a class="header-anchor" href="#_5-参考" aria-hidden="true">#</a> 5. 参考</h2><blockquote><p>参考-可用</p></blockquote>',14),d={href:"https://blog.csdn.net/qq_39651734/article/details/142104521",target:"_blank",rel:"noopener noreferrer"},v=n("blockquote",null,[n("p",null,"参考-未成功")],-1),m={href:"https://www.cnblogs.com/echohye/p/17303897.html",target:"_blank",rel:"noopener noreferrer"};function b(y,q){const s=e("ExternalLinkIcon");return o(),r("div",null,[k,n("p",null,[n("a",d,[a("acgis api for js 3.x，加载天地图超过18层级不展示问题处理"),p(s)])]),v,n("p",null,[n("a",m,[a("使用arcgis api for js加载影像 | 如何在19级数时放大18级数的瓦片图层？"),p(s)])])])}const T=t(u,[["render",b],["__file","1.html.vue"]]);export{T as default};
