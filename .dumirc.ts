import { defineConfig } from 'dumi';
console.log('defineConfig', defineConfig);

export default defineConfig({
  outputPath: 'docs-dist', // 最终打包生成的文件
  exportStatic: false, // 取消打包静态单个组件库和函数工具
  themeConfig: {
    name: 'dhooks',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/a-home' }, // components会默认自动对应到src文件夹
    ],
  },
  styles: [
    // `.dumi-default-header-left {
    //    width: 220px !important;
    // }`,
  ],
});
