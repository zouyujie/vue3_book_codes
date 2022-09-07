<template>
  <div>
    <input ref="authCode" />
    <!--将页面作为组件缓存 -->
    <router-view v-slot="{ Component }">
      <keep-alive include="KeepAliveDemo">
        <component :is="Component" />
      </keep-alive>
      <!-- 逗号分隔字符串 -->
      <keep-alive include="a,b">
        <component :is="view"></component>
      </keep-alive>

      <!-- 正则表达式 (使用 `v-bind`) -->
      <keep-alive :include="/a|b/">
        <component :is="view"></component>
      </keep-alive>

      <!-- 数组 (使用 `v-bind`) -->
      <keep-alive :include="['a', 'b']">
        <component :is="view"></component>
      </keep-alive>
      <keep-alive :max="10">
        <component :is="view"></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onActivated, ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";

export default defineComponent({
  name: "KeepAliveDemo", // keep-alive中include属性匹配组件name
  setup() {
    let authCode = ref();
    onActivated(() => {
      authCode.value = ""; // 页面每次进入将验证码置为空
    });
    // to为即将跳转的路由，from为上一个页面路由
    onBeforeRouteLeave((to, from, next) => {
      // 设置下一个路由的 meta
      to.meta.keepAlive = false;
      next();
    });
  },
});
</script>

<style scoped></style>
