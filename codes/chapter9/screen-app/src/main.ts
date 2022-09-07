import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './scss/element-variables.scss';
import 'normalize.css';
import "./assets/font/font.scss";

import './mock/index.ts'; //mock
import "./utils/rem.ts";

const app = createApp(App);
import { loadAllPlugins } from './plugins';
loadAllPlugins(app);// 加载所有插件

app.use(store).use(router).mount("#app");
