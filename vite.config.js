/*
 * @Author: 汤波
 * @Date: 2021-04-30 11:16:42
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-05-06 15:00:51
 * @FilePath: \jrcs-manage\vite.config.js
 */
import styleImport from "vite-plugin-style-import";
import viteCompression from "vite-plugin-compression";
import vue from "@vitejs/plugin-vue";
const path = require("path");

module.exports = {
  alias: {
    "/@/": path.resolve(__dirname, "./src"),
  },
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "/jrcs-manage",
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  cssPreprocessOptions: {
    less: {
      javascriptEnabled: true,
    },
  },
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: "target",
  // 是否自动在浏览器打开
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "ant-design-vue",
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/css`;
          },
        },
      ],
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  port: 3000,
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  // 引入第三方的配置
  optimizeDeps: {
    include: ["echarts", "mockjs", "ant-design-vue", "core-js", "js-cookie"],
  },
  proxy: {
    "/api": "http://10.192.195.96:8087",
  },
};
