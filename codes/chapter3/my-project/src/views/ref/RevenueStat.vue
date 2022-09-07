<template>
  <div>
   <p v-for="(item,index) in listData" :key="index">{{item.name}}：{{item.val}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [
        { name: "累计充值", val: 0 },
        { name: "特惠人群", val: 0 },
      ],
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
     //模拟接口调用
    //   revenueStat().then((res) => {
    //     let data = res.data.data;
    //     this.refreshData(data);
    //   });
    },
    //让父组件调用的方法
    refreshData(data) {
      if (data) {
        this.listData[0].val = data.totalPay;
        this.listData[1].val = data.discountNums;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>