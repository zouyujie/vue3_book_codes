<template>
   <button @click="update">更新</button>
   <p> {{name}}</p>
   <p> {{user}}</p>
   <p>{{skill}}</p>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const name = ref("风清扬");
    const user = reactive({ name: '风清扬', student: { name: "令狐冲" } });

    // 使用ref处理对象，对象会被自动转换为reactive的proxy对象
    const skill = ref({ name: '独孤九剑', owner: { name: "风清扬" } });
    console.log(name, user, skill); //RefImpl Proxy RefImpl
    console.log(skill.value.owner); //Proxy,也是一个proxy对象

    function update() {
      name.value += "的剑法";
      user.name += "的剑法";
      user.student.name += "的冲灵剑法";

      skill.value = { name: '华山剑法', owner: { name: "风清扬-剑宗传人" } };
      skill.value.owner.name= "令狐冲"; // reactive对对象进行了深度数据劫持
      console.log(name, user, skill); 
      console.log(skill.value.owner); //Proxy {name: "令狐冲"}
    }

    return {
      name,
      user,
      skill,
      update,
    };
  },
});
</script>

<style scoped></style>
