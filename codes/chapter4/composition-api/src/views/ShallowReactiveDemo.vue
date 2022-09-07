<template>
    <h3>
     {{user1.name}}，{{user1.age}}，{{user1.skill.name}}
    </h3>
      <h3>
     {{user2.name}}，{{user2.age}}，{{user2.skill.name}}
    </h3>
      <h3>
     {{user3.name}}，{{user3.age}}，{{user3.skill.name}}
    </h3>
      <h3>
     {{user4.name}}，{{user4.age}}，{{user4.skill.name}}
    </h3>
    <button @click="updateData">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  shallowReactive,
  shallowRef,
} from "vue";

export default defineComponent({
  setup() {
    // 深度劫持(深监视)----深度响应式
    const user1 = reactive({
      name: "断浪",
      age: 21,
      skill: {
        name: "蚀日剑法",
      },
    });
    // 浅劫持(浅监视)----浅响应式
    const user2 = shallowReactive({
      name: "聂风",
      age: 22,
      skill: {
        name: "风神腿"
      },
    });
    // 深度劫持(深监视)----深度响应式----做了reactive的处理
    const user3 = ref({
      name: "步惊云",
      age: 23,
      skill: {
        name: "排云掌",
      },
    });
    // 浅劫持(浅监视)----浅响应式
    const user4 = shallowRef({
      name: "秦霜",
      age: 24,
      skill: {
        name: "天霜拳",
      },
    });
    const updateData = () => {
      // 更改user1的数据---reactive方式
      user1.name += '—天下会副帮主'
      user1.skill.name += '—火麟剑'
      // 更改user2的数据---shallowReactive
      user2.name += '—神风堂主';
      user2.skill.name += '—血饮狂刀';
      // 更改user3的数据---ref方式
      user3.value.name += '—飞云堂主';
      user3.value.skill.name += '—绝世好剑';
      // 更改user4的数据---shallowRef方式
      user4.value.name += '—天霜堂主'; //不变
      user4.value.skill.name += '—断臂';//不变
      console.log(user1,user2,user3, user4)
    }
    return {
      user1,
      user2,
      user3,
      user4,
      updateData,
    }
  },
});
</script>

<style scoped>
</style>