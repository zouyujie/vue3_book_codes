<template>
  <div>
    <p>{{msg}}--{{ info }}</p>
    <button @click="changeMsg">更新信息</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "SetupChild",
  emits: ["onChange"], // 可选的, 声明了更利于程序员阅读, 且可以对分发的事件数据进行校验
  props:['msg'],
  // setup (props, context) { context可以直接解构为实际对象
  setup(props: any, { attrs, emit, slots }) {
    const info = ref(attrs.info);
    console.log('setup',props,attrs, emit, slots);
    function changeMsg() {
      // 分发自定义事件
      emit("onChange", "朱元璋");
    }
    return {
      info,
      changeMsg,
    };
  },
});
</script>
