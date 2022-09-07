<template>
  <div>
  <div>{{name}}-{{title}}</div>
   <!--<CustomInput
      v-model="name"
    ></CustomInput>-->
    <!--<CustomInput :value="name" @input="name = $event.target.value"></CustomInput>-->
    <CustomInput
      v-model="name"
      :title.sync="title"
></CustomInput>
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
