<template>
  <div class="operation-screen">
    <div class="nav-box">
      <time-tabs
        :dataArr="dataArr"
        @change="onChange"
        v-model:value="curType"
        size="mid"
      ></time-tabs>
    </div>
    <screen-header :titleText="titleText"></screen-header>
    <div class="grid-layout">
      <div
        class="grid-item"
        v-for="(item, index) in layout"
        :class="item.name"
        :key="index"
      >
        <component
          :is="item.name"
          :title="item.title"
          :ref="setItemRef"
        ></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LineNet from "./LineNet.vue";
import Bus from "./Bus.vue";
import GetoutReasons from "./GetoutReasons.vue";
import AreaPassengerStat from "./AreaPassengerStat.vue";
import CardTypeUse from "./CardTypeUse.vue";
import TransportPassengerRank from "./TransportPassengerRank.vue";
import EPayTrend from "./EPayTrend.vue";
import ScreenHeader from "@/components/ScreenHeader.vue";
import {
  defineComponent,
  reactive,
  toRefs,
  markRaw,
  ref,
  computed,
  nextTick,
  onBeforeUpdate,
  // onBeforeMount,
} from "vue";
import TimeTabs from "@/components/TimeTabs.vue";
import { useStore } from "vuex";

// import { initWebSocket } from "@/utils/websocket";

export default defineComponent({
  name: "operation-screen",
  components: {
    LineNet,
    GetoutReasons,
    AreaPassengerStat,
    CardTypeUse,
    TransportPassengerRank,
    EPayTrend,
    ScreenHeader,
    Bus,
    TimeTabs,
  },
  setup() {
    let options = reactive({
      titleText: "公交大数据运营数据分析",
      layout: [
        {
          title: "线网",
          name: "line-net",
        },
        {
          title: "车辆",
          name: "bus",
        },
        {
          title: "违规原因分析",
          name: "getout-reasons",
        },
        {
          title: `卡类型使用情况`,
          name: "card-type-use",
        },
        {
          title: "区域客流统计",
          name: "area-passenger-stat",
        }, //地图
        {
          title: `线路运客数排名`,
          name: "transport-passenger-rank",
        },
        {
          title: `电子支付趋势`,
          name: "e-pay-trend",
        },
      ],
    });
    const dataArr = markRaw([
      { label: "日", value: 0 },
      { label: "周", value: 1 },
      { label: "月", value: 2 },
      { label: "年", value: 3 },
    ]);
    const store = useStore(); //调用mutation方法
    const screenDataType = computed(() => {
      return store.getters["app-global/GET_DATATYPE"];
    });
    let curType = ref(screenDataType.value);
    //刷新数据
    let itemRefs: any = [];

    const setItemRef = (el:any) => {
      if (el) {
        itemRefs.push(el);
      }
    };
    function onChange(val:any) {
      curType.value = val;
      store.commit("app-global/SET_DATATYPE", val);
      nextTick(() => {
        itemRefs.forEach((n:any) => {
          console.log("key", n, n.initData);
          n.initData && n.initData(); // eslint-disable-line
        });
      });
    }
    //数据变化后重置数组
    onBeforeUpdate(() => {
      itemRefs = [];
    });
    //#region ws实时刷新
    // const openWs = false; //开启websocket
    // let websocketInstance: any = null;
    // if (websocketInstance == null) {
    //   websocketInstance = createdSockets();
    // }
    // //关闭websocket
    // function closeWS() {
    //   if (websocketInstance) {
    //     websocketInstance.send("close"); //通过发送close命令，让JAVA后台来关闭ws
    //     websocketInstance = null;
    //   }
    // }
    // // 连接websocket
    // function createdSockets() {
    //   const curTenantId = "yujie";
    //   return initWebSocket(
    //     {
    //       userId: `${curTenantId}_realtime`,
    //     },
    //     refreshtData,
    //     `/web-socket-server/realtime`
    //   );
    // }
    // // 实时回调
    // function refreshtData(res) {
    //   // console.log("数据 :>> ", res.data.data, $refs[res.name]);
    //  nextTick(() => {
    //     itemRefs.forEach((n) => {
    //       console.log("key", n, n.initData);
    //       n.refreshData && n.refreshData(res.data.data); // eslint-disable-line
    //     });
    //   });
    // }
    // onBeforeMount(() => {
    //   closeWS();
    // });
    //#endregion

    return {
      ...toRefs(options),
      dataArr,
      curType,
      onChange,
      setItemRef,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
.operation-screen {
  background-image: url("/imgs/bg/operate-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;
}
.ctrl-box {
  position: absolute;
  top: 2px;
  left: 15px;
  z-index: 4;
}
.nav-box {
  position: absolute;
  right: 20px;
  top: 40px;
  z-index: 9;
}
</style>
