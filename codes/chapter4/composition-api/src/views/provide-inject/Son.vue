<template>
  <div>
    儿子：{{name}}
    <hr/>
    <GrandSon></GrandSon>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import GrandSon from "./GrandSon.vue";

export default defineComponent({
  components: { GrandSon },
  setup() {
    // 注入的操作
    const name = inject("name");
    return { name };
  },
});
</script>