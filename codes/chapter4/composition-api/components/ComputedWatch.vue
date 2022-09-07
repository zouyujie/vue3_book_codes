<template>
  <div>
    <div>fullName:{{ fullName }}</div>
    称号：<input v-model="user.nickName" /> 名：<input
      v-model="user.firstName"
    />
    字：<input v-model="user.lastName" />
    <div>fullName1:{{ fullName1 }}</div>
    <div>fullName2:{{ fullName2 }}</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  watchEffect,
  ref,
  watch,
} from "vue";

export default defineComponent({
  setup() {
    const user = reactive({
      nickName: "剑魔",
      firstName: "独孤",
      lastName: "求败",
    });
    // 只有getter的计算属性
    const fullName = computed(() => {
      return `${user.nickName}-${user.firstName}-${user.lastName}`;
    });
    // 有getter与setter的计算属性
    const fullName1 = computed({
      get() {
        console.log("fullName1 get");
        return `${user.nickName}-${user.firstName}-${user.lastName}`;
      },
      set(value: string) {
        console.log("fullName1 set");
        const names = value.split("-");
        user.nickName = names[0];
        user.firstName = names[1];
        user.lastName = names[2];
      },
    });
    const fullName2 = ref("");
    watchEffect(() => {
      console.log("watchEffect");
      fullName2.value = `${user.nickName}-${user.firstName}-${user.lastName}`;
    });

    //watch一个对象
    watch(
      user,
      () => {
        fullName2.value = `${user.nickName}-${user.firstName}-${user.lastName}`;
      },
      {
        immediate: true, // 是否初始化立即执行一次, 默认是false
        deep: true, // 是否是深度监视, 默认是false
      }
    );
    //watch对象指定的属性
     watch(
      user,
      ({nickName}) => {
        console.log('nickName',nickName);
        fullName2.value = `${user.nickName}-${user.firstName}-${user.lastName}`;
      },
      {
        immediate: true, // 是否初始化立即执行一次, 默认是false
        deep: true, // 是否是深度监视, 默认是false
      }
    );
    // watch一个数据，默认在数据发生改变时执行回调
    watch(fullName2, (value) => {
      console.log("watch");
      const names = value.split("-");
      user.nickName = names[0];
      user.firstName = names[1];
      user.lastName = names[2];
    });
    return {
      fullName,
      fullName1,
      fullName2,
      user,
    };
  },
});
</script>

<style scoped>
input {
  width: 80px;
}
</style>
