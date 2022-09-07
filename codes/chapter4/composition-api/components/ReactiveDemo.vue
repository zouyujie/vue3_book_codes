<template>
  <div>
    姓名：{{ state.name }}，年龄：{{ state.age }}，绰号：{{ state.nickName }}
  </div>
  <div>
    儿子：{{ state.son.name }}，年龄：{{ state.son.age }}，绰号：{{
      state.son.nickName
    }}
  </div>
  <div><button @click="onModify">修改儿子信息</button></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive } from "vue";
export default defineComponent({
  setup() {
    //被代理的目标对象
    const user = {
      name: "杨康",
      age: 30,
      nickName: "小王爷",
      son: {
        name: "杨过",
        age: 7,
        nickName: "臭小子",
      },
    };
    // 定义响应式数据对象，返回的是一个Proxy代理对象
    const state = reactive(user);
    console.log(state);
    const onModify = () => {
      state.son.age = 30;
      state.son.nickName = "神雕大侠";
    };
    return { state, onModify };
  },
});
</script>

<style scoped></style>
