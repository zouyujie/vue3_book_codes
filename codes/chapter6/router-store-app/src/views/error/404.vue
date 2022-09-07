<template>
  <div class="wrap">
    <div class="banner">
      <img src="./images/banner.png"
           alt />
    </div>
    <div class="page">
      <h2>很抱歉，没有找到这个页面!</h2>
      <a class="btn back"
         @click.prevent="goBack">
        <i class="fa fa-angle-left"></i> 返回上一页
      </a>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    //返回上一页
    const goBack = () => {
      window.history.go(-1);
    };
    // const router = useRouter();
    // // 向前移动一条记录，与 router.forward() 相同
    // router.go(1);
    // // 返回一条记录，与router.back() 相同
    // router.go(-1);
    // // 前进 3 条记录
    // router.go(3);
    // // 如果没有那么多记录，静默失败
    // router.go(-100);
    // router.go(100);

    return { goBack };
  },
});
</script>

<style lang="scss" scoped>
@import "./404.scss";
</style>