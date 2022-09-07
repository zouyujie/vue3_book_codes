<template>
  <h3>郭襄的父亲是：{{ parentName }}，</h3>
  <h3>他的武功有{{ skill }}</h3>
  <div class="son"> <input type="button" value="找父亲" @click="myclick" /></div>
</template>

<script>
export default {
  //   props: ["parentName","skill"],
  //   props:{
  //       parentName:String,
  //       skill:Array
  //   },
  props: {
    parentName: {
      type: String,
      default: "",
    },
    skill: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      sonMsg: { name: "郭破虏", age: 6 },
    };
  },
  methods: {
    myclick() {
      // 当点击子组件的按钮的时候，通过$emit拿到父组件传递过来的 func 方法，并调用这个方法
      // emit 英文原意： 是触发，调用、发射的意思
      this.$emit("func", this.sonMsg);
    },
  },
};
</script>

<style  scoped>
.son {
  background-color: lightgreen;
}
</style>
