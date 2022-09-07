<template>
  <div class="home-title-box">
    <img src="imgs/bg/banner-bg.png" class="img" />
    <div class="title">{{ titleText }}</div>
    <span class="datetime">{{ datetimeText }}</span>
    <span
      class="log-out iconfont icon-tuichu"
      title="退出登录"
      @click="logout"
    ></span>
  </div>
</template>

<script lang="ts">
import { getCurDatetime } from "@/utils/date";
import { defineComponent, ref, onBeforeUnmount } from "vue";
export default defineComponent({
  props: ["titleText"],
  setup() {
    let datetimeText = ref(getCurDatetime());
    let timer = setInterval(() => {
      datetimeText.value = getCurDatetime();
    }, 1000);
    //退出
    function logout() {
    }
    onBeforeUnmount(() => {
      if (timer) {
        clearInterval(timer);
      }
    });
    return {
      datetimeText,
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
.home-title-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 40px;
  width: 100%;
  color: white;
  z-index: 3;
  .title {
    width: 100%;
    height: 80px;
    position: absolute;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "YSBTH";
    letter-spacing: 10px;
  }
  .img {
    width: 100%;
    height: 80px;
    position: absolute;
  }
  .datetime {
    position: absolute;
    right: 40px;
    top: 0px;
    height: 30px;
    line-height: 30px;
    z-index: 3;
    // color: white;
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
  }
  .log-out {
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 20px;
    color: #2b4cc9;
    z-index: 4;
    cursor: pointer;
    &:hover {
      color: $hoverColor;
    }
  }
}
</style>
