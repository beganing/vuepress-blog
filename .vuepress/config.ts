import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import recoTheme from 'vuepress-theme-reco';
import * as fs from 'fs';

/**
 * 获取对应文件夹中的文件数组, 用于series中的配置项
 * @param dir 文件夹路径 '.vuepress/dist/docs/learning-record/xxx'
 * @returns 文件数组 ['1', '2', ...]
 */
const getFiles = (dir: string) => {
  const files = fs.readdirSync(dir);

  return files.map((file) => {
    return file.slice(0, file.lastIndexOf('.'));
  });
};
// 获取 postgis 文件夹下的文件
const postgis_dir: string = '.vuepress/dist/docs/learning-record/PostGIS';
const postgis_file_arr = getFiles(postgis_dir);

export default defineUserConfig({
  base: '/vuepress-blog/', // 配置路径
  title: 'zhangslのBlog',
  description: 'Just playing around',
  port: 8090,
  open: false,
  theme: recoTheme({
    // password: 'd8d641f02750b97dbac4daed617ffba4',
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'zhangsl',
    authorAvatar: '/head.png',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: '/blogs',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/docs/learning-record/PostGIS/': [
        {
          text: 'PostGIS',
          // children: ['1', '2', '3', '4'],
          children: postgis_file_arr,
          //   // collapsible: true, // 默认展开，true 为折叠
        },
        // {
        //   text: 'OpenLayers',
        //   children: ['theme', 'plugin'],
        // },
        // {
        //   text: '前端',
        //   children: ['api'],
        // },
      ],
    },
    navbar: [
      // { text: '首页', link: '/' },
      { text: '分类', link: '/categories/reco/1/', icon: 'Category' },
      { text: '标签', link: '/tags/tag1/1/', icon: 'Tag' },
      {
        text: '文档',
        children: [
          { text: '学习记录', link: '/docs/learning-record/PostGIS/1' },
          // { text: 'vuepress-theme-reco', link: '/blogs/other/guide' },
        ],
        icon: 'Document',
      },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
