<template>
  <div v-if="errMsg"> {{ errMsg }} </div> 
  <Suspense>
    <template v-slot:default>
      <!--异步组件-->
      <AsyncComponent></AsyncComponent>
    </template>
    <template v-slot:fallback>
      <!--loading的内容-->
      <h2>数据加载中.....</h2>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { onErrorCaptured, ref } from "vue";
import { defineComponent, defineAsyncComponent } from "vue";
// Vue2中的动态引入组件的写法(在Vue3中这种写法不行)
// const AsyncComponent = () => import("../components/AsyncComponent.vue");
// Vue3中的动态引入组件的写法
const AsyncComponent = defineAsyncComponent(
  () => import("../components/AsyncComponent.vue")
);
// 静态引入组件
// import AsyncComponent from '../components/AsyncComponent.vue';
export default defineComponent({
  components: {
    AsyncComponent,
  },
  setup() {
    let errMsg = ref("");
    onErrorCaptured((ex) => {
      errMsg.value = "报错了" + ex;
      return true;
    });
    return { errMsg };
  },
});
</script>
