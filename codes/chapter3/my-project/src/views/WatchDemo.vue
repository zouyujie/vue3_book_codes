<template>
  <input type="text" v-model="name" />
  <button @click="name = '甄志丙'">换人</button>
  <div>{{ msg }}</div>
  <input type="text" v-model="user.skill" />
  <button @click="user.skill = '灵蛇拳'">换功</button>
  <div>{{remark}}</div>
</template>

<script>
export default {
  data() {
    return {
      name: "尹志平",
      msg: "",
      user: {
        skill: "蛤蟆功",
      },
      remark:''
    };
  },
  watch: {
    /**
     * newVal:新值
     * oldVal:旧值
     */
    // name(newVal, oldVal) {
    //  this.msg='之前是'+oldVal + "在偷窥小龙女；";
    //  this.msg+='现在是'+newVal + "在偷窥小龙女";
    // },
    name: {
      handler(newVal, oldVal) {
        this.msg = "之前是" + oldVal + "在偷窥小龙女；";
        this.msg += "现在是" + newVal + "在偷窥小龙女";
      },
      immediate: true,
    },
    // user: {
    //   //只有一个参数的情况下表示newVal
    //   handler(obj) {
    //     this.remark=obj.skill;
    //   },
    //   deep: true,
    //   immediate: true,
    // },
    'user.skill': {
      //只有一个参数的情况下表示newVal
      handler(val) {
        this.remark=val;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
