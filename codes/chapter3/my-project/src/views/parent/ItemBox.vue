<template>
  <dl class="item-box">
    <dd class="name">{{ item.name }}</dd>
    <dd>{{ item.price }}</dd>
    <dd><ProductNums :nums="item.nums" @updateNums="updateNums" :id="item.id"></ProductNums></dd>
    <dd>{{ item.fee }}</dd>
  </dl>
</template>

<script>
import ProductNums from "./ProductNums.vue";
export default {
  components: { ProductNums },
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          name: "",
          price: 0,
        };
      },
    },
  },
  methods:{
      updateNums(id,val){
          //调用父组件方法
          this.$parent.updatedList(id,val)
      }
  }
};
</script>

<style lang="scss" scoped>
.item-box {
  display: flex;
  dd {
    width: 100px;
    padding: 0px;
    margin: 0px;
    &.name {
      width: 150px;
    }
  }
}
</style>
