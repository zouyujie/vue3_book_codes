<template>
 <h3>x: {{x}}, y: {{y}}</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useMousePosition from "../hooks/useMousePosition";
export default defineComponent({
  setup() {
    const { x, y } = useMousePosition();
    return {
      x,
      y,
    };
  },
});
</script>

<style scoped>
</style>