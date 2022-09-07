import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app=createApp(App);
// 5. 创建并挂载根实例
// app.use(store).use(router).mount('#app');

// import nameView from './views/name-view/index.vue'
// const app=createApp(nameView);
app.use(store).use(router).mount('#app');
