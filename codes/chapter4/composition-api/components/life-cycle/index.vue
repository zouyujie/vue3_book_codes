<template>
  <div>
    <button @click="show = !show">切换</button>
    <Child v-if="show"></Child>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "./Child.vue";

export default defineComponent({
  components: {
    Child,
  },
  setup() {
    const show = ref(false);
    return { show };
  },
});
</script>

<style scoped></style>
