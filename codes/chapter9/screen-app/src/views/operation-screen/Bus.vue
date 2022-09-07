<template>
  <div class="car">
    <jie-header :title="curTitle">
      <div class="head-info">
        <span class="label">标台数：</span>
        <span class="val">{{ numFormat(carNums) }}</span>
        <span class="unit">辆</span>
      </div>
    </jie-header>
    <div class="content">
      <div class="left-box">
        <jie-echarts
          id="pureElectricNums"
          :style="chartStyle"
          :option="pureElectricNumsOption"
        />
      </div>
      <div class="center-box">
        <jie-echarts
          id="hybridNums"
          :style="chartStyle"
          :option="hybridNumsOption"
        />
      </div>
      <div class="right-box">
        <jie-echarts id="gasNums" :style="chartStyle" :option="gasNumsOption" />
      </div>
    </div>
    <div class="title-box">
      <span class="chart-title">纯电</span><span class="chart-title">混动</span
      ><span class="chart-title">燃气</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import { deepCopy, numFormat, getColorByIndex } from "@/utils/common";
import { miniCircleOption } from "@/utils/chart-options";
import { busInfo } from "@/api/operation-screen";
import useOptions from "./use-options";
export default defineComponent({
  name: "bus",
  props: {
    title: {
      type: String,
    },
  },
  setup(props) {
    const { screenDataType, getTitle, chartStyle } = useOptions();
    const colorArr = [
      { start: "#4DE8FF", end: "#2AA6FF" },
      { start: "#FFFB00", end: "#FFA300" },
    ];
    let options = reactive({
      carNums: 3200, //车辆 标台数
      pureElectricNums: 350, //纯电数
      hybridNums: 200, //混动数
      gasNums: 450, //燃气数
    });
    let pureElectricNumsOption = reactive(deepCopy(miniCircleOption));
    let hybridNumsOption = reactive(deepCopy(miniCircleOption));
    let gasNumsOption = reactive(deepCopy(miniCircleOption));
    //初始化数据
    function initData() {
      busInfo({ type: screenDataType.value }).then((res) => {
        const data = res.data.data;
        refreshData(data);
        console.log("options", toRefs(options));
      });
    }
    function formatData(val) {
      return ((val / options.carNums) * 100).toFixed(0);
    }
    function formatChart(optionName, val, name) {
      optionName.title.text = formatData(val) + "%";
      console.log("val", val);
      optionName.series[0].data[0].value = val;
      optionName.series[0].data[0].name = name;
      optionName.series[1].data[0].value = options.carNums;
    }
    onMounted(() => {
      initData();
    });
    //刷新数据
    function refreshData(data) {
      if (data) {
        options.carNums = data.carNums;
        options.pureElectricNums = data.pureElectricNums;
        options.hybridNums = data.hybridNums;
        options.gasNums = data.gasNums;

        pureElectricNumsOption.title.text = formatData(data.pureElectricNums);
        formatChart(pureElectricNumsOption, data.pureElectricNums, "纯电");
        formatChart(hybridNumsOption, data.hybridNums, "混动");
        hybridNumsOption.series[0].data[0].itemStyle.color = getColorByIndex(
          colorArr,
          0
        );
        formatChart(gasNumsOption, data.gasNums, "燃气");
        gasNumsOption.series[0].data[0].itemStyle.color = getColorByIndex(
          colorArr,
          1
        );
      }
    }
    const curTitle = getTitle(props);
    return {
      ...toRefs(options),
      screenDataType,
      chartStyle,
      numFormat,
      pureElectricNumsOption,
      hybridNumsOption,
      gasNumsOption,
      curTitle,
      initData
    };
  },
});
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  height: calc(100% - 34px);
  .left-box,
  .center-box,
  .right-box {
    width: 33.3%;
    position: relative;
  }
}
.head-info {
  display: flex;
  align-items: baseline;
  .val {
    color: #ffe500;
    font-size: 20px;
  }
  .label,
  .unit {
    color: #eeeeee;
    font-size: 14px;
    // display: flex;
    // align-items: baseline;
  }
  .unit {
    padding-left: 4px;
  }
}
.car {
  position: relative;
  height: 100%;
}
.title-box {
  position: absolute;
  display: flex;
  width: 100%;
  color: white;
  font-size: 16px;
  height: 20px;
  bottom: 5px;
  z-index: 2;
  .chart-title {
    width: 33.3%;
    display: flex;
    justify-content: center;
  }
}
</style>
