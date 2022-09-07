<template>
  <div class="e-pay-trend">
    <jie-header :title="curTitle"></jie-header>
    <div class="content">
      <div class="chart">
        <jie-echarts
          id="CurMonthEPayTrend"
          :style="chartStyle"
          :option="chartOption"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, computed } from "vue";
import { epayTendency } from "@/api/operation-screen";
import {
  deepCopy,
  getDataNameByType,
  getUnitNameByType,
  getColorByIndex,
} from "@/utils/common";
import useOptions from "./use-options";
import { lineOption } from "@/utils/chart-options";

export default defineComponent({
  name: "e-pay-trend",
  props: {
    title: {
      type: String,
    },
  },
  setup(props) {
    const { screenDataType, getTitle, chartStyle } = useOptions();
    const options = reactive({
      chartOption: deepCopy(lineOption),
    });
    const colorArr = [
      { start: "rgba(77, 232, 255, 0.2)", end: "rgba(42, 166, 255, 0.2)" },
    ];
    //初始化数据
    function initData() {
      epayTendency({ type: screenDataType.value }).then((res) => {
        // console.log("res3", res);
        const data = res.data.data;
        refreshData(data);
      });
    }
    let curTitle = computed(() => {
      return getDataNameByType(screenDataType.value) + getTitle(props);
    });
    onMounted(() => {
      initData();
    });
    //刷新数据
    function refreshData(data) {
      if (data) {
        options.chartOption.xAxis.data = data.xAxisData;
        options.chartOption.tooltip.formatter = "{c}%";
        options.chartOption.series[0].data = data.seriesData;
        options.chartOption.xAxis.name = getUnitNameByType(screenDataType.value);
        options.chartOption.series[0].areaStyle.color = getColorByIndex(
          colorArr,
          0
        );
      }
    }
    return { chartStyle, curTitle, ...toRefs(options),initData };
  },
});
</script>

<style lang="scss" scoped>
.e-pay-trend {
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
