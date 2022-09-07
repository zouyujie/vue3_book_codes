<template>
  <div ref="msg">
    {{ message }}
  </div>
  <button @click="handleClick">测试</button>
</template>

<script>
export default {
  data() {
    return {
      message: "花如解语应多事",
    };
  },
  created() {
    console.log("created");
    // this.handleClick();
  },
  mounted() {
    console.log("mounted");
    this.handleClick();
  },
  methods: {
    handleClick() {
      this.message = "石不能言最可人";
      if (this.$refs.msg) {
        console.log(this.$refs.msg.innerText); //花如解语应多事
      }
      this.$nextTick(() => {
        if (this.$refs.msg) {
          console.log(this.$refs.msg.innerText); //石不能言最可人
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
