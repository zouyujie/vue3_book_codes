<template>
  <h3>用户：{{ user }}</h3>
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>
<script lang="ts">
import { defineComponent, markRaw, reactive, toRaw } from 'vue'
interface UserInfo {
  name: string;
  age: number;
  skills?: string[];
}
export default defineComponent({
  name: 'App',
  setup() {
    const user = reactive<UserInfo>({
      name: '万里云',
      age: 30,
    });

    const testToRaw = () => {
      // 把代理对象变成了普通对象了，数据变化，界面不变化
      const newUser = toRaw(user)
      newUser.name = '云飞扬';
    }
    const testMarkRaw = () => {
      user.skills = ['天蚕功', '天蚕再变'];
      console.log(user);
      const skills = ['天蚕功', '天蚕再变']
      // markRaw标记的对象数据，从此以后都不能再成为代理对象了
      user.skills = markRaw(skills)
      setTimeout(() => {
        if (user.skills) {
          user.skills[0] = '武当梯云纵';
          console.log('延时执行');
        }
      }, 1000)
    }
    return {
      user,
      testToRaw,
      testMarkRaw,
    }
  },
})
</script>