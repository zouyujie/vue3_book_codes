<template>
  <div>
    {{count}}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      //通过computed反复访问state
      count: computed(() => store.state.count),
      //调用mutation方法
      increment: () => store.commit("increment"),
      // 调用action方法
      asyncIncrement: () => store.dispatch("asyncIncrement"),
    };
  },
});
</script>

<style scoped>
</style>