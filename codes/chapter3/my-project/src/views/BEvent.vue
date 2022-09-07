<template>
  <!-- 注意：此时方法的()不能省略 -->
  <button @click="onOne(), onTwo()">执行多个事件</button>
   <button @click="onClickAll">执行多个事件</button>
</template>

<script>
export default {
  methods: {
    onOne () {
      console.log('一个小孩坐飞机');
    },
    onTwo () {
      console.log('二个小孩梳小辫儿');
    },
    onClickAll(){
      this.onOne();
      this.onTwo();
    }
  }
}
</script>
