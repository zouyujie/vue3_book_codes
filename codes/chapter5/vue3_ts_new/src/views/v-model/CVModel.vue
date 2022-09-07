<template>
  <!-- vue2.2 -->
  <!-- <Child v-model="title" value="例无虚发" /> -->
  <!-- 相当于 -->
  <!-- <Child
    :checked="title"
    @change="
      (val) => {
        title = val;
      }
    "
    value="例无虚发"
  >
  </Child> -->
  <!-- vue3 -->
  <!-- <Vue3Child v-model="title" /> -->
  <!-- 相当于 -->
  <!-- <Vue3Child :modelValue="title" @update:modelValue="title = $event" /> -->
  <!-- 更换v-model的参数 -->
  <Vue3Child v-model:title="title" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import Child from "./Child.vue";
import Vue3Child from "./Vue3Child.vue";

export default defineComponent({
  components: {
    // Child,
    Vue3Child,
  },
  setup() {
    const title = ref("");
    return { title };
  },
});
</script>

<style scoped>
</style>