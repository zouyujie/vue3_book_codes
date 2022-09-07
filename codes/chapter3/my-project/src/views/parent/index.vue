<template>
  <dl class="head">
    <dd class="name">商品信息</dd>
    <dd>单价</dd>
    <dd>数量</dd>
    <dd>金额</dd>
  </dl>
  <div class="list-item">
    <ItemBox v-for="(item, index) in list" :key="index" :item="item"></ItemBox>
  </div>
</template>

<script>
import ItemBox from "./ItemBox.vue";
export default {
  components: {
    ItemBox,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          name: "汽车补漆笔黑色漆面修补车漆神器去痕点",
          price: 50,
          nums: 1,
          fee: 50,
        },
      ],
    };
  },
  methods: {
    updatedList(id, nums) {
      const index = this.list.findIndex((f) => f.id == id);
      if (index != -1) {
        this.list[index].nums = nums;
        this.list[index].fee = this.list[index].price * nums;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  dd {
    padding: 0px;
    margin: 0px;
    width: 100px;
    &.name {
      width: 150px;
    }
  }
}
</style>
