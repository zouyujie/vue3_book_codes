<template>
  <div>
    我
    <AsyncComponent></AsyncComponent>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
const AsyncComponent = defineAsyncComponent(() =>
  import("@/components/AsyncComponentDemo.vue")
);
export default {
  name: "async-components",
  components: {
    'AsyncComponent': AsyncComponent,
  },
};
</script>

<style lang="scss" scoped></style>
