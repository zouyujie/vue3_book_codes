<template>
  <div>
    <input type="checkbox">{{message}}
  </div>
</template>
<script>
export default {
  //2.x用法,可以修改prop和触发的事件名称，3.x中model已经废弃
  model: {
    prop: "message", // v-model绑定的属性名称
    event: "change", // v-model绑定的事件
  },
  props: {
    value: String, // value跟v-model无关
    message: {
      // title是跟v-model绑定的属性
      type: String,
      default: "默认文本",
    },
  },
};
</script>
