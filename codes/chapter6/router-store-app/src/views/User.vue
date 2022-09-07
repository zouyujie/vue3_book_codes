<template>
  张君宝喜欢{{$route.params.name }}
  <p> {{name}}喜欢杨过</p>
  <p> {{userData}}</p>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    console.log(route.params, router);
    const name = ref<string | string[]>("");
    name.value = route.params.name;

    const userData = ref();

    // 当参数更改时获取用户信息
    watch(
      () => route.params,
       (newParams) => {
        console.log('newParams',newParams);
        userData.value = newParams.name;
      }
    );
    
    return { name, userData };
  },
});
</script>

<style scoped>
</style>