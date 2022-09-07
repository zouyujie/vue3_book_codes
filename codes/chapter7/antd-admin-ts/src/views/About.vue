<template>
  <div class="about">
    <a-button type="primary">Primary</a-button>
    <a-input v-model:value="value" placeholder="Basic usage" />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup () {
    const value = ref('');
    return {
      value,
    };
  },
});
</script>
<style scoped>
.about {
  width: 200px;
}
</style>
