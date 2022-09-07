<template>
  <!-- 每一个图表都有自己唯一的id,需要动态传入。 -->
  <div :id="id" :class="myclass" :style="myStyle" />
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, toRef } from "vue"; //"@vue/composition-api";
import { guid } from "@/utils/common";
import { EleResize } from "@/utils/esresize.js";
import { init } from "echarts";

export default defineComponent({
  name: "jie-echarts",
  props: {
    //id标识，唯一
    id: {
      type: String,
      default: guid(),
    },
    //图表宽度
    width: {
      type: String,
      default: "100%",
    },
    //图表高度
    height: {
      type: String,
      default: "220px",
    },
    //指定class样式名称
    class: {
      type: String,
      default: "echarts-line",
    },
    //echarts配置项
    option: {
      type: Object,
      default: () => {},
    },
    //style样式对象
    style: {
      type: Object,
      default: () => {},
    },
    //是否加载中
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: any, { emit }) {
    let MyEcharts: any = null; // echarts实例
    // 组件初始化
    const InitCharts = () => {
      let dom = document.getElementById(props.id);
      MyEcharts = init(dom as HTMLDivElement);
      if (props.loading == true) {
        showLoading();
      }
      /**
       * 此方法适用于所有项目的图表，但是每个配置都需要在父组件传进来，相当于每个图表的配置都需要写一遍，不是特别的省代码，主要是灵活度高
       * echarts的配置项，你可以直接在外边配置好，直接扔进来一个this.option
       */
      MyEcharts.clear(); // 适用于大数据量的切换时图表绘制错误,先清空在重绘
      MyEcharts.setOption(props.option, true); // 设置为true可以是图表切换数据时重新渲染
      MyEcharts.on("click", function (params: any) {
        mapClick(params);
      });
      //不加这代码，图表初始化展示会有问题
      setTimeout(() => {
        MyEcharts.resize();
      });
      // // 当窗口变化时随浏览器大小而改变-有缺陷
      // window.onresize = () => {
      //  MyEcharts.resize();
      //     console.log('变化window');
      //   // MyEcharts.resize({ height: this.height });
      // };
      //在div上绑定对应onresize 方法
      EleResize.on(dom, () => {
        // eslint-disable-line
        console.log("变化EleResize");
        MyEcharts.resize();
      });
    };
    //组件单击事件
    const mapClick = (params: any) => {
      emit("eclick", params);
    };
    const showLoading = () => {
      if (MyEcharts) {
        MyEcharts.showLoading({
          text: "loading",
          // color: '#4cbbff',
          // textColor: '#4cbbff',
        });
      }
    };
    const hideLoading = () => {
      if (MyEcharts) {
        MyEcharts.hideLoading();
      }
    };
    onMounted(() => {
      InitCharts();
    });
    watch(
      ()=>props.option,
      (newVal, oldVal) => {
        if (MyEcharts) {
          if (newVal) {
            MyEcharts.setOption(newVal, true);
          } else {
            MyEcharts.setOption(oldVal, true);
          }
        } else {
          InitCharts();
        }
      },
      {
        deep: true, // 是否是深度监视, 默认是false
      }
    );
    watch(()=>props.loading, () => {
      props.loading === true ? showLoading() : hideLoading();
    });
    const myclass = toRef(props, "class");
    const myStyle = toRef(props, "style");
    return { MyEcharts, myclass, myStyle };
  },
});
</script>

<style scoped></style>
