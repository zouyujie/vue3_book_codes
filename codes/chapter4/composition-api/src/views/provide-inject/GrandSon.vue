<template>
  <div>
    孙子：{{grandSonName}}<button @click="doSomehing">行侠仗义</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const doSomehing = inject("callBack");
    const grandSonName=inject('grandSonName');
    return { doSomehing,grandSonName };
  },
});
</script>

<style scoped>
</style>