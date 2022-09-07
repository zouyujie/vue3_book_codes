<template>
  <div class="card-type-use">
    <jie-header :title="curTitle"></jie-header>
    <div class="content">
      <div class="chart">
        <jie-echarts id="CurCardTypeUse" :style="chartStyle" :option="chartOption" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, computed } from "vue";
import { deepCopy, getDataNameByType, getColorByIndex } from "@/utils/common";
import { baseInfoCircleNormalOption } from "@/utils/chart-options";
import { cardUseRatio } from "@/api/operation-screen";
import useOptions from "./use-options";
export default defineComponent({
  name: "card-type-use",
  props: {
    title: {
      type: String,
    },
  },
  setup(props) {
    const colorArr = [
      { start: "#ffa300", end: "#fffb00" },
      { start: "#0b69ff", end: "#0bd6ff" },
      { start: "#7334ff", end: "#b87eff" },
      { start: "lightgreen", end: "green" },
      { start: "#EF1850", end: "#FF7095" },
    ];
    const { screenDataType, getTitle, chartStyle } = useOptions();
    const options = reactive({
      chartOption: deepCopy(baseInfoCircleNormalOption),
    });
    //初始化数据
    function initData() {
      cardUseRatio({ type: screenDataType.value }).then((res) => {
        const data = res.data.data;
        refreshData(data);
      });
    }
    //格式化echart配置项
    function formatChart(data) {
      options.chartOption.color = [
        getColorByIndex(colorArr, 0),
        getColorByIndex(colorArr, 1),
        getColorByIndex(colorArr, 2),
        getColorByIndex(colorArr, 3),
        getColorByIndex(colorArr, 4),
      ];
      options.chartOption.series[0].data = data.seriesData;
      options.chartOption.legend.data = data.seriesData.map((m) => {
        return m.name;
      });
      let total = 0;
      data.seriesData.forEach((n) => {
        total += n.value;
      });
      options.chartOption.title.subtext=total;
      options.chartOption.legend.formatter = (name) => {
        let paramsStr;
        for (let i = 0; i < data.seriesData.length; i++) {
          if (data.seriesData[i].name == name) {
            paramsStr =
              ((data.seriesData[i].value / total) * 100).toFixed(2) + "%";
          }
        }
        let arr = [name + "：", paramsStr];
        return arr.join("");
      };
      options.chartOption.tooltip.formatter = (datas) => {
        let res = `${datas.name}<br/>`;
        // 如果不为空 ，那么拼接实际的信息
        if (datas.value !== "null") {
          res += `${datas.marker}金额：${datas.value}，百分比：${datas.percent}%<br/>`;
        }
        return res;
      };
    }
    onMounted(() => {
      initData();
    });
    const curTitle = computed(() => {
      return getDataNameByType(screenDataType.value) + getTitle(props);
    });
    //刷新数据
    function refreshData(data) {
      if (data) {
        formatChart(data);
      }
    }
    return {
      ...toRefs(options),
      curTitle,
      screenDataType,
      chartStyle,
      initData,
    };
  },
});
</script>

<style lang="scss" scoped>
.card-type-use {
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
