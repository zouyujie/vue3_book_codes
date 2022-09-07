<template>
   {{ name }}是谁 
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  //组合API入口函数
  setup() {
    return {
      name: "孙悟空",
    };
  },
});
</script>

<style scoped></style>
