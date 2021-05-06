/*
 * @Author: 汤波
 * @Date: 2021-04-29 09:51:25
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-04-30 10:13:52
 * @FilePath: \jrcs-manage\src\main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import ant from "./utils/ant";
import "./styles/main.less";

const app = createApp(App);
app.use(router);
app.use(ant);
app.mount("#app");
