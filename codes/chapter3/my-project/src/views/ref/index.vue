<template>
  <div>
    <RevenueStat ref="RevenueStat"></RevenueStat>
    <button @click="updateChindData">更新子组件</button>
  </div>
</template>

<script>
import RevenueStat from "./RevenueStat.vue";
export default {
  components: {
    RevenueStat,
  },
  data() {
    return {};
  },
  methods: {
    //更新子组件数据
    updateChindData() {
      this.$nextTick(() => {
        const obj = { totalPay: 200, discountNums: 300 };
        this.$refs.RevenueStat&&this.$refs.RevenueStat.refreshData(obj);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>