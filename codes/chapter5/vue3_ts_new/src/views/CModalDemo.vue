<template>
  <button @click="isVisible=true">弹出一个模态对话框</button>
  <c-modal :visible="isVisible"
         title="用户详情"
         @close-model="isVisible=false"></c-modal>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import CModal from "../components/CModal.vue";
export default defineComponent({
  components: {
    CModal,
  },
  setup() {
    const isVisible = ref(false);
    return {
      isVisible,
    };
  },
});
</script>