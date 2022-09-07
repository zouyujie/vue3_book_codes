import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 1. 定义路由组件，也可以从其他文件导入
//将
// import Home from '../views/Home.vue';
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    // component: Home,
    //替换成
    component: () => import("../views/Home.vue"),
    redirect: "/login", //页面一加载时，默认跳转到login组件
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      keepAlive: true, //设置页面是否需要使用缓存
    },
  },
  {
    path: "/about",
    name: "About",
    //组件懒加载
    component: () => import("../views/About.vue"),
  },
  {
    path: "/user/:name", // 动态段以冒号开始
    name: "User",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/user/:name/age/:age",
    name: "User-Age",
    component: () => import("../views/User.vue"),
  },
  // 命名路由
  {
    path: "/detail",
    name: "detail",
    component: () => import("../views/Detail.vue"),
  },
  { path: "/login/:name/:pwd", component: () => import("../views/Login.vue") },
  //系统设置
  {
    path: "/sys-set",
    component: () => import("../views/sys-set/index.vue"),
    children: [
      {
        path: "user-manage",
        component: () => import("../views/sys-set/user-manage/index.vue"),
      },
      {
        path: "role-manage",
        component: () => import("../views/sys-set/role-manage/index.vue"),
      },
    ],
  },
  // 命名视图
  {
    path: "/name-view",
    components: {
      default: () => import("../views/name-view/components/Header.vue"),
      sidebar: () => import("../views/name-view/components/Sidebar.vue"),
      main: () => import("../views/name-view/components/MainBox.vue"),
    },
  },
  { path: "/vuex", component: () => import("../views/VuexDemo.vue") },
  { path: "/next-vuex", component: () => import("../views/NextVuexDemo.vue") },
  { path: "/modules", component: () => import("../views/ModulesDemo.vue") },
  { path: "/namespace", component: () => import("../views/NameSpace.vue") },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/error/404.vue"),
  },
];
// import {createWebHashHistory} from 'vue-router';
// 3. 创建路由实例并传递 `routes` 配置，你可以在这里输入更多的配置
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。
  history: createWebHistory(process.env.BASE_URL),
  // history:createWebHashHistory(process.env.BASE_URL), //hash模式
  routes, // `routes: routes` 的缩写
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
