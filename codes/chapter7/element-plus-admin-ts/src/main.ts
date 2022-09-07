import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { ElButton, ElSelect } from 'element-plus';
// 如果要使用.scss样式文件，则需要引入base.scss文件
// import 'element-plus/packages/theme-chalk/src/base.scss'
import './element-variables.scss';

const app = createApp(App);
app.use(ElButton;
app.use(ElSelect);
app.use(ElementPlus, { size: 'small', zIndex: 3000 });

app.use(ElementPlus).use(store).use(router).mount("#app");
