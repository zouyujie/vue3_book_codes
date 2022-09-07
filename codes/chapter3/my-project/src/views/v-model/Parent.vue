
<template>
<!-- 父组件 -->
  <div>
    <Child v-model="message" />
    <div>绑定的值：{{message}}</div>
  </div>
</template>
<script>
export default {

}
</script>