<template>
  <div class="line-net">
    <jie-header :title="curTitle">
      <div class="head-info">
        <span class="label">总线路：</span>
        <span class="val">{{ numFormat(lineNums) }}</span>
        <span class="unit">条</span>
      </div>
    </jie-header>
    <div class="content-box">
      <div class="item" v-for="(item, index) in lineNetList" :key="index">
        <img :src="item.icon" />
        <div class="msg-box">
          <span class="label"> {{ item.text }}</span>
          <span class="val">
            {{ numFormat(item.val) }}
            <span class="unit" v-if="item.unit">{{ item.unit }}</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted, defineComponent } from "vue";
import useOptions from "./use-options";
import { numFormat } from "@/utils/common";
import { lineInfo } from "@/api/operation-screen";
export default defineComponent({
  name: "line-net",
  props: {
    title: {
      type: String,
    },
  },
  setup(props) {
    const options = reactive({
      lineNums: 0, //总线路
      lineNetList: [
        {
          icon: require("@/assets/images/screen/lineLength.png"),
          text: "线路长度",
          val: 0,
          unit: "KM",
        },
        {
          icon: require("@/assets/images/screen/repeatFactor.png"),
          text: "重复系数",
          val: 0,
          unit: "",
        },
        {
          icon: require("@/assets/images/screen/specialRoadLength.png"),
          text: "专用道长度",
          val: 0,
          unit: "KM",
        },
        {
          icon: require("@/assets/images/screen/notStraightLineFactor.png"),
          text: "非直线系数",
          val: 0,
          unit: "",
        },
      ],
    });
    const { screenDataType, getTitle } = useOptions();
    //初始化数据
    function initData() {
      lineInfo({ type: screenDataType.value }).then((res) => {
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
        options.lineNums = data.lineNums;
        options.lineNetList[0].val = data.lineLength;
        options.lineNetList[1].val = data.repeatFactor;
        options.lineNetList[2].val = data.specialRoadLength;
        options.lineNetList[3].val = data.notStraightLineFactor;
      }
    }
    return {
      ...toRefs(options),
      curTitle: getTitle(props),
      numFormat,
      initData
    };
  },
});
</script>

<style lang="scss" scoped>
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
  }
  .unit {
    padding-left: 4px;
  }
}
.content-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    width: 50%;
    display: flex;
    justify-content: center;
    padding-top: 15px;
    .label {
      color: #9fa6b2;
      width: 90px;
      font-size: 15px;
    }
    .val {
      font-size: 25px;
      color: #ffffff;
      font-weight: 400;
    }
    img {
      width: 49px;
      height: 49px;
      padding-right: 15px;
    }
    .msg-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-width: 120px;
    }
  }
}
</style>
