<template>
  <div>
    <!-- vue3绑定 -->
    <CustomInput v-model="age"></CustomInput>
    <CustomInput v-model:name="name" v-model:title="title"></CustomInput>
  </div>
</template>

<script>
import CustomInput from "./CustomInput.vue";
export default {
  components: {
    CustomInput,
  },
  data() {
    return {
      name: "岁月无声",
      title: "歌曲",
      age:30
    };
  },
};
</script>

<style lang="scss" scoped></style>
