<template>
  <div class="custom-input">
    <h3>自定义文本框</h3>
    <!-- vue3中的绑定 -->
    <input type="text" :value="modelValue" @input="onNewInput" />
    <input type="text" :value="name" @input="onNameInput" />
  </div>
</template>

<script>
export default {
  props: ["modelValue", "name"],
  methods: {
    onNewInput(event) {
      this.$emit("update:modelValue", parseInt(event.target.value));
    },
    onNameInput(event) {
      this.$emit("update:name", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
