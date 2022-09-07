<template>
  <div>
    <div id="nav" v-if="$route.name != '404'">
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/login">Login</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user/郭襄">郭襄</router-link> |
      <router-link to="/user/雪鹰">雪鹰</router-link> |
      <router-link to="/login?name=yujie&pwd=123">登录</router-link> |
      <router-link to="/login/yujie/123">登录</router-link> |
      <!-- 命名路由 -->
      <router-link :to="{ name: 'detail', params: { msg: '只叹江湖几人回' } }"
        >详情</router-link
      >
      | <router-link to="/sys-set">系统设置</router-link> |
      <router-link to="/name-view">命名视图</router-link> |
      <router-link to="/vuex">Vuex</router-link> |
      <router-link to="/next-vuex">NextVuex</router-link> |
      <router-link to="/modules">modules</router-link> |
      <router-link to="/namespace">namespace</router-link>
    </div>
    <!-- 使用动态的 transition name -->
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!-- <router-view /> -->
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade"
                  mode="out-in"
                  appear>
        <component :is="Component" />
      </transition>
    </router-view> -->

    <!-- vue2.x配置 -->
   <!-- <keep-alive>
    <router-view v-if="$route.meta.keepAlive" />
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"/> -->
  <template>
  <!-- vue3.0配置 -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"  v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component"  v-if="!$route.meta.keepAlive"/>
  </router-view> 
</template>

  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";

export default defineComponent({
  setup() {
    let transitionName = ref("");
    onBeforeRouteUpdate((to, from) => {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      transitionName.value = toDepth < fromDepth ? "slide-right" : "slide-left";
    });
    return { transitionName };
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      // color: #42b983;
      color: skyblue;
    }
    &.active {
      color: orange;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
