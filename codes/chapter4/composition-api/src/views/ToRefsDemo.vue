<template>
  <dd>名字：{{name}}</dd>
  <dd>绰号：{{title}}</dd>
  <dd>武功：{{skill}}</dd>
  <dd>年龄：{{age}}</dd>
  <hr>
  在使用toRefs之前
  <dd>年龄：{{user.age}}</dd>
  ......
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const user = reactive({
      name: "叶白衣",
      title: "长明山剑仙",
      skill: "六合心法",
      age: 100,
    });
    //模拟数据更新
    setTimeout(()=>{
       user.age++;
    },1000);
    console.log(`对象`, toRefs(user),user);
    return { ...toRefs(user),user };
  },
});
</script>

<style scoped>
</style>