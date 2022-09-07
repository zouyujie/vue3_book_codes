<template>
  <h3>user:{{ user }}</h3>
  <h3>name:{{ name }}，skill:{{ skill }}</h3>
  <hr />
  <button @click="updateData">更新数据</button>

  <hr />
  <Child :name="name" />
</template>
<script lang="ts">
import { defineComponent, reactive, toRef, ref } from "vue";
import Child from "./Child.vue";
export default defineComponent({
  components: {
    Child,
  },
  setup() {
    const user = reactive({
      name: "温客行",
      skill: "鬼谷武学",
    });
    // 把响应式数据user对象中的某个属性name变成了ref对象了
    const name = toRef(user, "name");
    // 把响应式对象中的某个属性使用ref进行包装,变成了一个ref对象
    const skill = ref(user.skill);
    console.log(name, skill);
    // 更新数据
    const updateData = () => {
      // user.name = "甄洐";
      name.value = "甄洐";
      skill.value = "六合心法";
    };
    return {
      user,
      name,
      skill,
      updateData,
    };
  },
});
</script>