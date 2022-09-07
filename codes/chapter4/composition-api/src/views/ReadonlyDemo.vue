<template>
  <h3>用户信息：{{ user2 }}</h3>
  <button @click="updateData">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    const user = reactive({
      name: "断浪",
      age: 21,
      skill: {
        name: "蚀日剑法",
      },
    });
    // 只读的数据---深度的只读
    // const user2 = readonly(user);
    // 只读的数据---浅只读的
    const user2 = shallowReadonly(user);
    const updateData = () => {
    //   user2.name += '—天下会副帮主'
      user2.skill.name += '—火麟剑'
    //   user2.name += '—神风堂主';
    }
    return {
      user2,
      updateData,
    }
  },
})
</script>