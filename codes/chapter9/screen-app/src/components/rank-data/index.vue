<template>
  <div class="range-div">
    <div class="item" v-for="(item, index) in chartData" :key="index">
      <p class="title" :title="item.name">
        {{ item.name }}
      </p>
      <div class="percent">
        <div
          class="yellow"
          :class="getItemClass(index)"
          :style="{ width: item.percent * 100 + '%' }"
        >
          <i></i>
          <div class="container">
            <div class="light"></div>
          </div>
        </div>
      </div>
      <p class="number">
        {{ item.value }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";
export default defineComponent({
  name: "rank-data",
  props: {
    rankData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup(props) {
    function getItemClass(index:number) {
      return index < 3 ? "yellow" : "blue";
    }
    const chartData=ref(props.rankData);
    return {
      getItemClass,
      chartData
    };
  },
});
</script>

<style lang="scss" scoped>
//创建css动画，并命名为flash
@keyframes flash {
  0% {
    left: 0;
    transform: translateX(-100%) skew(-45deg);
  }
  100% {
    left: 100%;
    transform: translateX(0) skew(-45deg);
  }
}
.range-div {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  .item {
    color: #aaaaaa;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 10%;
    .title {
      width: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .percent {
      width: calc(100% - 140px);
      height: 13px;
      background: linear-gradient(
        90deg,
        #001052 0,
        rgba(0, 16, 82, 0.5) 75%,
        rgba(0, 16, 82, 0.1)
      );
      .yellow {
        height: 12px;
        background-repeat: no-repeat, repeat;
        background-image: linear-gradient(
            90deg,
            #ff7d00 0,
            rgba(244, 245, 6, 0.8)
          ),
          url(./imgs/bg.png);
        background-size: auto, auto 100%;
        background-blend-mode: color-dodge;
        border-right: 5px solid #f4f506;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        > i {
          -webkit-box-shadow: 2px 0 10px 3px #f4f506;
          box-shadow: 2px 0 10px 3px #f4f506;
        }
      }
      .blue {
        height: 12px;
        background: linear-gradient(90deg, #004eff 0, rgba(19, 221, 248, 0.9)),
          url(./imgs/bg.png);
        background-size: auto, auto 100%;
        background-blend-mode: color-dodge;
        border-right: 5px solid #13ddf8;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        > i {
          box-shadow: 2px 0 10px 3px #13ddf8;
        }
      }
      > div {
        .container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }
      }
    }
    .number {
      width: 60px;
      font-size: 14px;
    }
  }
}
.light {
  cursor: pointer;
  position: absolute;
  top: 0;
  width: 15px;
  height: 10px;
  background: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0.5),
    hsla(0, 0%, 100%, 0)
  );
  animation-name: flash;//指定动画名称
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}
</style>
