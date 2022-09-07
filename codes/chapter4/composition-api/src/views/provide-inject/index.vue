<template>
  <div>
    杨铁心{{message}}
    <button @click="doSomehing">动手</button>
    <hr />
    <Son></Son>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import Son from "./Son.vue";

export default defineComponent({
  components: { Son },
  setup() {
    const message = ref<string>("");
    const name = ref<string>("");
    const grandSonName = ref<string>("");
    // 提供数据
    provide("name", name);
    provide("grandSonName", grandSonName);
    //提供方法
    provide("callBack", () => {
      message.value = "得以含笑九泉";
      name.value = "杨康已经死了";
    });
    const doSomehing = () => {
      message.value = "杀了几个金人";
      name.value = "杨康被完颜洪烈带走了";
      grandSonName.value = "杨过出场";
    };
    return { doSomehing, message };
  },
});
</script>

<style scoped>
</style>