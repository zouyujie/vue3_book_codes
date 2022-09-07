<template>
  <div @click="getInfo" ref="divObj" data-name="画江湖之不良人">
    <span>点击获取数据</span>
  </div>
  <input type='text' ref='input' />
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.input.focus(); //文本框自动聚焦
      //添加事件
      this.$refs.divObj.onmouseover = () => {
        console.log("鼠标进入了",this.$refs.divObj);
      };
    });
  },
  methods: {
    getInfo() {
      // 得到目标元素，并获取自定义的属性内容
      console.log(this.$refs.divObj.dataset.name);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>