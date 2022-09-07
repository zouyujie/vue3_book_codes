<template>
  <!-- <p>{{ msg }}</p>
  <button @click="changeMsg">更新信息</button> -->
  <!-- 3.setup的参数 -->
  <SetupChild :msg="msg" info="大明开国皇帝" @onChange="onChange"></SetupChild>
  <p>{{msg}}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SetupChild from "./SetupChild.vue";

//1.setup执行的时机
export default defineComponent({
  setup() {
    console.log("setup执行",this);//this:undefined
    return {};
  },
  //初始化事件、生命周期
  beforeCreate() {
    console.log("beforeCreate执行",this); //this:Proxy {…}
  },
});

//2.setup的返回值
// export default defineComponent({
//   setup() {
//     const msg = ref("武媚娘");
//     function changeMsg(){
//       msg.value='武则天';
//     }
//     return {msg,changeMsg};
//   },
// });

//3.setup的参数
// export default defineComponent({
//   components: {
//     SetupChild,
//   },
//   setup() {
//     const msg=ref("朱重八");
//     function onChange(val:any){
//       msg.value=val;
//     }
//     return {
//       msg,
//       onChange
//     };
//   },
// });
</script>

<style scoped></style>
