<template>
  <div>{{ message }}</div>
  <div v-text="message"></div>
  <div>{{ message }}-金庸</div>
  <div v-text="flag?'温客行':'周子舒'"></div>
  <div>{{ flag?'温客行':'周子舒' }}<span>-天涯客</span></div>
</template>

<script>
export default {
  data () {
    return {
      message: '飞雪连天射白鹿',
      flag:false
    }
  }
}
</script>

<style  scoped>
div {
  height: 30px;
}
</style>