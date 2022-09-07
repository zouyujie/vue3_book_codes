<template>
  <div class="transport-passenger-rank">
    <jie-header :title="curTitle"></jie-header>
    <div class="content">
      <div class="chart">
        <RankData :rankData="rankData" v-if="rankData"></RankData>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import RankData from "@/components/rank-data/index.vue";
import { createRankData } from "@/utils/common";
import { defineComponent, onMounted, ref } from "vue";
import useOptions from "./use-options";
import { safeMileageRank } from "@/api/operation-screen";
export default defineComponent({
  name: "transport-passenger-rank",
  props: {
    title: {
      type: String,
    },
  },
  components: {
    RankData,
  },
  setup(props) {
    let rankData = ref(null);
    const { screenDataType, getTitle } = useOptions();
    const curTitle = getTitle(props);
    //数据初始化
    function initData() {
      safeMileageRank({ type: screenDataType.value }).then((res) => {
        const data = res.data.data;
        refreshData(data);
      });
    }
    //刷新数据
    function refreshData(data) {
      if (data) {
        rankData.value = createRankData(data);
      }
    }
    onMounted(() => {
      initData();
    });
    return { rankData, curTitle,initData };
  },
});
</script>

<style lang="scss" scoped>
.transport-passenger-rank {
  height: 100%;
  .content {
    height: calc(100% - 34px);
    .chart {
      position: relative;
      height: 100%;
      padding-left: 15px;
      padding-top: 10px;
    }
  }
}
</style>
