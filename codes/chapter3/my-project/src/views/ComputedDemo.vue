<template>
  <div v-text="reversedMessage"></div>
  <button @click="setMsg()">改变数据</button>
  <div>
    <input type="text" v-model="userName" />
    <input type="text" v-model="nickName" />
  </div>
   <button @click="setDefaultMsg()">设置初始化数据</button>
  <div>{{ fullName }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "僧游云隐寺",
      userName: "",
      nickName: "",
    };
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    fullName: {
      // getter
      get: function() {
        return this.userName + "-" + this.nickName;
      },
      // setter
      set: function(newValue) {
        const names = newValue.split(" ");
        this.userName = names[0];
        this.nickName = names[names.length - 1];
      },
    },
  },
  methods: {
    setMsg() {
      this.message = "晴晴雨雨时时好好奇奇";
    },
    setDefaultMsg(){
        this.fullName="独臂刀霸 刘精湛";
    }
  },
};
</script>

<style lang="scss" scoped></style>
