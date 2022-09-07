<template>
  <!-- <input type="text" :value="modelValue" @input="updateValue" /> -->
  {{title}}
   <input type="text" :value="title" @input="updateValue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ValidateInput",
  props: {
    // modelValue: String, // v-model绑定的属性值
    title: String, // title替代了modelValue
  },
  setup(props, context) {
    const updateValue = (e: KeyboardEvent) => {
      if (e.target) {
        // context.emit(
        //   "update:modelValue",
        //   (e.target as HTMLTextAreaElement).value
        // ); // 传递的方法
         context.emit(
          "update:title",
          (e.target as HTMLTextAreaElement).value
        ); // 传递的方法
      }
    };
    return {
      updateValue,
    };
  },
});
</script>

<style scoped>
</style>