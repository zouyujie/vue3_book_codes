<template>
  <div class="about">
    <h4>他说: {{ msg }}</h4>
    <hr />
    <button @click="onSay">更新</button>
  </div>
</template>

<script lang="ts">
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
} from "vue";

export default {
  beforeCreate() {
    console.log("beforeCreate");
  },

  created() {
    console.log("created");
  },

  beforeMount() {
    console.log("beforeMount");
  },

  mounted() {
    console.log("mounted");
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },

  updated() {
    console.log("updated");
  },

  beforeUnmount() {
    console.log("beforeUnmount");
  },

  unmounted() {
    console.log("unmounted");
  },

  setup() {
    const msg = ref("纵横江湖三十余载，杀尽仇寇，败尽英雄，天下更无敌手");

    const onSay = () => {
      msg.value = "余生平"+msg.value;
    };

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onMounted(() => {
      console.log("onMounted");
    });

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });

    return {
      msg,
      onSay,
    };
  },
};
</script>
