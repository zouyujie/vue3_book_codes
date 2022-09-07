<template>
  <input type="text" ref="inputRef" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
     // 默认是null，只有当页面加载完毕后,组件已经存在了，才能获取文本框元素
    const inputRef = ref<HTMLElement | null>(null);
     // 页面加载后的生命周期组合API
    onMounted(() => {
      inputRef.value && inputRef.value.focus();
    });
    return { inputRef };
  },
});
</script>

<style scoped>
</style>