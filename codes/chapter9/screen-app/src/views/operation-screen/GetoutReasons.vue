<template>
  <div class="getout-reasons">
    <jie-header :title="curTitle"></jie-header>
    <div class="content">
      <div class="chart">
        <jie-echarts id="GetoutReasons" :style="chartStyle" :option="chartOption" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { deepCopy } from "@/utils/common";
import useOptions from "./use-options";
import { violationReasonInfo } from "@/api/operation-screen";
import { radarOption } from "@/utils/chart-options";
export default defineComponent({
  name: "getout-reasons",
  props: {
    title: {
      type: String,
    },
  },
  setup(props) {
    const { screenDataType, getTitle, chartStyle } = useOptions();
    const options = reactive({
      chartOption: deepCopy(radarOption),
    });
    //初始化数据
    function initData() {
      violationReasonInfo({ type: screenDataType.value }).then((res) => {
        const data = res.data.data;
        refreshData(data);
      });
    }
    onMounted(() => {
      initData();
    });
    //刷新数据
    function refreshData(data) {
      if (data) {
        options.chartOption.series[0].data[0].value = data.map((m) => {
          return m.val;
        });
        options.chartOption.radar.indicator = data.map((m) => {
          return {
            name: m.name,
            max: m.max,
          };
        });
        // console.log("options.chartOption", JSON.stringify(options.chartOption));
      }
    }
    const curTitle = getTitle(props);
    return { chartStyle, curTitle, ...toRefs(options) ,initData};
  },
});
</script>

<style lang="scss" scoped>
.getout-reasons {
  height: 100%;
  .content {
    height: calc(100% - 34px);
    .chart {
      position: relative;
      height: 100%;
    }
  }
}
</style>
