<template>
  <p ref="myWidth" v-if="showMe">{{ offsetWidth }}</p>
  <button @click="getMyWidth">获取p元素宽度</button>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from "vue";

export default defineComponent({
  setup() {
    let showMe: any = ref(true);
    let offsetWidth:any = ref(0);
    let myWidth = ref();
    const getMyWidth = function() {
      // offsetWidth = myWidth.value.offsetWidth; //报错 TypeError: Cannot read property 'offsetWidth' of undefined
      nextTick(() => {
        //dom元素更新后执行，此时能拿到p元素的属性
        offsetWidth.value = myWidth.value.offsetWidth;
      });
    };
    return { showMe, getMyWidth, offsetWidth, myWidth };
  },
});
</script>

<style scoped></style>
