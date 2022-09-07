<template>
  <h2>AsyncComponent子级组件</h2>
  <h3>{{ msg }}</h3>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'
export default defineComponent({
  name: 'AsyncComponent',
  setup() {
    return new Promise((resolve, reject) => {
      //模拟异步加载数据
      setTimeout(() => {
        resolve({
          msg: '终于等到你',
        })
      }, 2000)
    }).then((res:any)=>{
       return {msg:res.msg};
    });
  },
})
</script>