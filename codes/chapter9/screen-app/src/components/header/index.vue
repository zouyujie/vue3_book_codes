<template>
  <div class="header">
    <span class="rectangle-bg"></span>
    <span class="rectangle-bg min"></span>
    <span class="header-text">{{ curTitle }}</span>
    <span class="more"><slot></slot></span>
    <span class="more" v-if="showMore" @click="onLookMore"> 查看更多 </span>
    <span
      v-if="showBack"
      class="iconfont icon-fanhui1"
      title="返回"
      @click="onBack"
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from "vue";

export default defineComponent({
  name:'jie-header',
  props: {
    //标题文字
    title: {
      type: String,
    },
    //是否显示查看更多，本大屏界面暂时用不到
    showMore: {
      type: Boolean,
      default: false,
    },
    //是否显示返回按钮，本大屏界面暂时用不到
    showBack: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: any, {emit }) {
    const curTitle =computed(()=>{return props.title});
    //查看更多
    const onLookMore = () => {
      emit("onLookMore");
    };
    //返回
    const onBack = () => {
      emit("onBack");
    };
    return { onLookMore, onBack,curTitle };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 34px;
  position: relative;
  margin-left: 10px;
  .rectangle-bg {
    width: 3px;
    height: 18px;
    display: block;
    background-color: #01c5ff;
    position: absolute;
    left: 5px;
    border-radius: 2px;
    &.min {
      height: 12px;
      left: 12px;
      background-color: rgba(0, 198, 255, 0.5);
    }
  }
  .header-text {
    color: #e3f8ff;
    min-width: 220px;
    background-size: 100%;
    height: 34px;
    display: flex;
    align-items: center;
    font-size: 18px;
    padding-left: 24px;
  }
  .head-end {
    height: 34px;
  }
  .more {
    position: absolute;
    right: 10px;
    top: 0px;
    height: 34px;
    line-height: 34px;
    // cursor: pointer;
    // &:hover {
    //   color: $hoverColor;
    // }
  }
  .iconfont {
    font-size: 18px;
    cursor: pointer;
    position: absolute;
    right: 8px;
    &:hover {
      color: $hoverColor;
    }
  }
}
</style>
