<template>
  <div>
    <!--输出 -->
    <div class="txt"{{ message }}</div>
    <!--双向绑定 -->
    <div><input type="text" v-model="message" /></div>
    <!--单向绑定 -->
    <div><input type="text" v-bind:value="message" /></div>
    <!--双向绑定 v-model它实际上是下面这种写法的简写 -->
    <div>
      <input
        type="text"
        v-bind:value="message"
        @input="message = $event.target.value"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "树欲静而风不止",
    };
  },
};
</script>

<style scoped>
div {
  height: 30px;
}
.txt {
  color: red;
}
</style>
