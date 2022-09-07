import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


const app = createApp(App);
// // 全局引入
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// app.use(Antd);

// 按需引用
// import { Button, message } from 'ant-design-vue';
// app.use(Button);
// app.config.globalProperties.$message = message;

//引入封装的Antd
import {setupAntd} from './ant-design-vue';
setupAntd(app);

app.use(store).use(router).mount("#app");
