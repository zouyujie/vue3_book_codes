<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";
export default defineComponent({
  setup() {
    const msg=ref("hello,world");
    return {msg};
  },
});
</script>
