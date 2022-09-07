<template>
  <p v-if="flag">柳暗花明又一村</p>
  <div v-if="Math.random() > 0.5">
    我买大
  </div>
  <div v-else>
    我押小
  </div>
  <div v-if="type === 'red'">
    红
  </div>
  <div v-else-if="type === 'orange'">
    橙
  </div>
  <div v-else-if="type === 'yellow'">
    黄
  </div>
  <div v-else>
    其它
  </div>
    <template v-if="flag">
      <h1>倚天屠龙</h1>
      <p>宝刀屠龙，号令天下，莫敢不从</p>
      <p>倚天不出，谁与争锋</p>
    </template>
    <div v-show="!flag">升则飞腾于宇宙之间</div>
    <div v-show="flag">隐则潜伏于波涛之内</div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      type: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
