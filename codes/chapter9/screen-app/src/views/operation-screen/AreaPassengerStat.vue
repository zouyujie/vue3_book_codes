<template>
  <div class="area-passenger-stat">
    <div class="content">
      <div class="chart">
        <jie-echarts
          id="AreaPassengerStat"
          :style="chartStyle"
          :option="chartOption"
          v-if="customerBatteryCityData"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import useOptions from "./use-options";
import { tooltipObj } from "@/utils/chart-options";
import geoJson from "@/assets/json/changsha.json";
import { compare } from "@/utils/common";
import { areaPassenger } from "@/api/operation-screen";
import * as echarts from "echarts";

export default defineComponent({
  name: "area-passenger-stat",
  setup() {
    const { screenDataType, chartStyle } = useOptions();
    const tooltipBg = require("@/assets/images/screen/tooltip.png");
    const locationImg = require("@/assets/images/screen/location.png");
    let customerBatteryCityData: any[] = reactive([]);
    const options: any = reactive({
      geoCoordMap: {},
      //地图颜色列表
      mapColor: [
        "#F8503A",
        "#F4B387",
        "rgb(225,131,46)",
        "rgb(231,210,99)",
        "rgb(2,201,251)",
        "rgb(231,210,99)",
        "rgb(2,201,251)",
        "#82D7ED",
        "#5B8504",
        "rgb(159,202,70)",
      ],
      chartOption: {
        tooltip: {
          trigger: "item",
          ...tooltipObj,
          padding: 0,
          backgroundColor: "rgba(0,19,63,0.8)",
          // formatter: "{a} <br/>{b} : {c}/位"  
          formatter: function (params) {//params,ticket, callback
            // console.log("params", params);
            //params.name name: "临淄区" seriesName: "客流人次"  value: 142
            let htmlStr = `<div style=" position: relative;height: 172px;width: 250px;">
        <img src="${tooltipBg}" height: 172px;width: 250px;/>
         <div style="position: absolute;top: 14px;left: 50%;transform: translateX(-50%); height: 150px;width: 200px;text-align: center;">
        <div style="color: rgba(247, 208, 0, 1);font-size: 25px;">
         <div style="display: flex;justify-content: center;align-items: center;">
          <img src="${locationImg}" height:24px;width: 19px style="padding-right: 6px;"/>${params.name}</div>
         </div>
         <div style="font-size: 32px;color: #FFFFFF; padding-top: 45px;">${params.value}</div>
         <div style=" padding-top: 25px;font-size: 14px;">${params.seriesName}</div>
         </div>
        </div>`;
            return htmlStr;
          },
        },
        // 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）
        visualMap: {
          // show:false,
          left: "2%",
          type: "piecewise", // 类型为分段型
          seriesIndex: [0, 1], //指定取哪个系列的数据
          min: 0,
          max: 100,
          realtime: false,
          calculable: true,
          // inRange: { color: ["#F4B387"]},
          splitNumber: 7, //平均分层
          pieces: [
            { gt: 400000, color: "#F8503A" },
            { gt: 300000, lte: 350000, color: "#F4B387" },
            { gt: 250000, lte: 300000, color: "rgb(225,131,46)" },
            { gt: 200000, lte: 250000, color: "rgb(231,210,99)" },
            { gt: 150000, lte: 200000, color: "rgb(2,201,251)" },
            { gt: 100000, lte: 150000, color: "#82D7ED" },
            { gt: 50000, lte: 100000, color: "#5B8504" },
            { gte: 0, lte: 50000, color: "rgb(159,202,70)" },
          ],
          textStyle: {
            color: "#fff",
          },
          itemWidth: "15",
          // text: ["高", "低"],
          dimension: 0, //指定用数据的『哪个维度』，映射到视觉元素上。
        },
        grid: {
          x: "8%",
          y: "10%",
          top: "30px",
          width: "14%",
          height: "50%",
        },
        xAxis: {
          gridIndex: 0,
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          gridIndex: 0,
          interval: 0,
          data: [], //yname,
          axisTick: {
            show: true,
          },
          splitLine: {
            show: false,
          },
          //刻度线样式
          axisLine: {
            show: true,
            lineStyle: {
              color: "#03a9f4",
            },
          },
          //刻度文本样式
          axisLabel: {
            show: true,
            color: "rgba(170, 170, 170, 1)",
            fontSize: "12",
          },
        },
        //geo地图配置
        geo: [
          {
            map: "changsha",
            aspectScale: 0.9,
            roam: true, // 是否允许缩放
            zoom: 1, // 默认显示级别
            layoutSize: "95%",
            layoutCenter: ["55%", "50%"],
            label: {
              show: true,
              color: "#fff",
            },
            itemStyle: {
              areaColor: {
                type: "linear-gradient",
                x: 0,
                y: 400,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(37,108,190,0.3)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(15,169,195,0.3)", // 50% 处的颜色
                  },
                ],
                global: true, // 缺省为 false
              },
              borderColor: "#4ecee6",
              borderWidth: 1,
            },
            // 高亮状态下的多边形和标签样式。
            emphasis: {
              itemStyle: {
                areaColor: "#0160AD",//地图区域的颜色。
              },
              label: {
                show: true,//是否显示标签。
                color: "#fff",
              },
            },
            zlevel: 3,
          },
        ],
        series: [],
      },
    });
    //初始化地图的配置项
    function initMapOption() {
      options.geoCoordMap = {};
      geoJson.features.map((m) => {
        options.geoCoordMap[m.properties.name] = m.properties.center;
      });
      console.log("geoCoordMap", JSON.stringify(options.geoCoordMap));
    }
    //初始化数据
    function initData() {
      areaPassenger({ type: screenDataType.value }).then((res) => {
        const data = res.data.data;
        refreshData(data);
        // initMapColor(max,min);
        // console.log("options.chartOption", JSON.stringify(options.chartOption));
      });
    }
    // //构造地图颜色
    // function initMapColor(max, min) {
    //   if (max > 50000) {
    //     let num = Math.trunc(max / 50000);
    //     let colors: string[] = [];
    //     for (let i = 0; i < num; i++) {
    //       colors[i] = i > 10 ? options.mapColor[i - 10] : options.mapColor[i];
    //     }
    //     options.chartOption.visualMap.inRange.color = colors;
    //     // options.chartOption.series[1].color=colors;
    //   } else {
    //     options.chartOption.visualMap.inRange.color = [options.mapColor[0]];
    //   }
    // }
    // 动态计算柱形图的高度（定一个max）
    function lineMaxHeight() {
      const maxValue = Math.max(
        ...customerBatteryCityData.map((item) => item.value)
      );
      console.log("0.9/maxValue", 9 / maxValue);
      return 0.1 / maxValue;
    }
    // 柱状体的主干
    function lineData() {
      return customerBatteryCityData.map((item) => {
        return {
          coords: [
            options.geoCoordMap[item.name],
            [
              options.geoCoordMap[item.name][0],
              options.geoCoordMap[item.name][1] + item.value * lineMaxHeight(),
            ],
          ],
        };
      });
    }
    // 柱状体的顶部
    function scatterData() {
      return customerBatteryCityData.map((item) => {
        return [
          options.geoCoordMap[item.name][0],
          options.geoCoordMap[item.name][1] + item.value * lineMaxHeight(),
        ];
      });
    }
    // 柱状体的底部
    function scatterDataBottom() {
      return customerBatteryCityData.map((item) => {
        return {
          name: item.name,
          value: options.geoCoordMap[item.name],
        };
      });
    }
    initMapOption();
    initData();
    console.log("echarts", echarts);
    if (echarts) {
      // @ts-ignore
      echarts.registerMap("changsha", geoJson); //注册地图
    }
    //刷新数据
    function refreshData(data) {
      if (data) {
        customerBatteryCityData = data;
      }
      const descData = data.sort(compare("value", "up"));
      console.log("descData", descData);
      let seriesdata = [
        //客流量
        {
          z: 0,
          geoIndex: 0,
          showLegendSymbol: true,
          // left: "20%",
          name: "客流人次",
          type: "map",
          aspectScale: 0.75, //长宽比
          map: "changsha",
          // zoom: 1, //当前视角的缩放比例
          roam: true, //是否开启平游或缩放
          scaleLimit: {
            //滚轮缩放的极限控制
            min: 1,
            max: 2,
          },
          label: {
            show: true,
          },
          data: data,
        },
        // 右边图表客流量
        {
          z: 1,
          name: "客流人次",
          type: "bar",
          xAxisIndex: 0,
          yAxisIndex: 0,
          barWidth: "35%",
          color: [],
          itemStyle: {
            color: "#fff",
          },
          emphasis: {
            itemStyle: {
              areaColor: "#2AB8FF",
              borderWidth: 0,
              color: "#03EAFF",
            },
          },
          label: {
            show: true,
            position: "right",
            color: "white",
          },
          data: descData, //data
        },
        // 用于带有起点和终点信息的线数据的绘制，主要用于地图上的航线，路线的可视化。
        {
          z: 2,
          type: "lines",
          zlevel: 5,
          effect: {
            show: false,
            // period: 4, //箭头指向速度，值越小速度越快
            // trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
            // symbol: 'arrow', //箭头图标
            // symbol: imgDatUrl,
            symbolSize: 5, // 图标大小
          },
          lineStyle: {
            width: 17, // 尾迹线条宽度
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "rgb(199,145,41)", // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "rgb(199,145,41)", // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "rgb(223,176,32)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgb(223,176,32)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgb(199,145,41)", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            opacity: 1, // 尾迹线条透明度
            curveness: 0, // 尾迹线条曲直度
          },
          label: {
            show: 0,
            position: "end",
            formatter: "245",
          },
          silent: true,
          data: lineData(),
        },
        {
          z: 3,
          type: "scatter",
          coordinateSystem: "geo",
          geoIndex: 0,
          zlevel: 5,
          label: {
            // show: true,
            position: "bottom",
            // formatter: params =>options.data[params.dataIndex].value,
            padding: [4, 8],
            backgroundColor: "#003F5E",
            borderRadius: 5,
            borderColor: "#67F0EF",
            borderWidth: 1,
            color: "#67F0EF",
          },
          symbol: "diamond",
          symbolSize: [17, 8],
          itemStyle: {
            color: "#ffd133",
            opacity: 1,
          },
          silent: true,
          data: scatterData(),
        },
        {
          z: 2,
          type: "scatter",
          coordinateSystem: "geo",
          geoIndex: 0,
          zlevel: 4,
          label: {
            formatter: "{b}",
            position: "bottom",
            color: "#fff",
            fontSize: 12,
            distance: 10,
            // show: true
          },
          symbol: "diamond",
          symbolSize: [17, 8],
          itemStyle: {
            // color: '#F7AF21',
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "rgb(199,145,41)", // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "rgb(199,145,41)", // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "rgb(223,176,32)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgb(223,176,32)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgb(199,145,41)", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            opacity: 1,
          },
          silent: true,
          data: scatterDataBottom(),
        },
      ];
      const yname: any[] = [];
      const valList: any[] = []; //值列表
      for (let i = 0; i < data.length; i++) {
        yname.push(data[i].name);
        valList.push(data[i].value);
      }
      options.chartOption.yAxis.data = yname;
      options.chartOption.series = seriesdata;

      // 求最大值、最小值
      let max = Math.max(...valList);
      let min = Math.min(...valList);
      options.chartOption.visualMap.max = max;
      options.chartOption.visualMap.min = min;
    }
    return { chartStyle, ...toRefs(options), customerBatteryCityData ,initData};
  },
});
</script>

<style lang="scss" scoped>
.area-passenger-stat {
  height: 100%;
  width: 100%;
  .content {
    height: calc(100% - 34px);
    .chart {
      position: relative;
      height: 100%;
    }
  }
}
</style>
