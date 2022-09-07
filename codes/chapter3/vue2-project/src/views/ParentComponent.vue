<template>
  <div>
    当前选中的是：{{name}}
    <ChildComponent v-model="name" :value="curValue"></ChildComponent>
    <!-- 相当于 -->
    <!-- <ChildComponent
      :name="name"
      @change="
        (val) => {
          name = val;
        }
      "
      :value="curValue"
    ></ChildComponent> -->
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      name: "徐志摩",
      curValue: "著名作家",
    };
  },
};
</script>

<style lang="scss" scoped></style>
