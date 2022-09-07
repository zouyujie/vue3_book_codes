import { createApp } from 'vue';
import App from './App.vue';
import storage from './utils/storage.js';
// import axios from 'axios';
import axios from "./request.js";

//创建App应用并返回对应的实例对象，然后调用mount方法进行挂载，挂载到id为app的html节点上去（public/index.html）
//在main.js中注册你想注册的东西
const app=createApp(App);
app.config.globalProperties.$axios=axios; //通过this.$axios可以访问
app.config.globalProperties.$storage=storage;
app.mixin({});
app.mount('#app')
