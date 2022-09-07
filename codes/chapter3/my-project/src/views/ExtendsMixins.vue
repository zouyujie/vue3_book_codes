<template>
  <div>{{ title }}</div>
  <div>{{ content }}</div>
</template>

<script>
import baseOptions from "@/utils/baseOptions.js";
import mixinOptions from "@/utils/mixinOptions.js";
export default {
//   extends: baseOptions,
  mixins: [mixinOptions,baseOptions],
  created() {
    this.initData();
  },
};
</script>

<style lang="scss" scoped></style>
