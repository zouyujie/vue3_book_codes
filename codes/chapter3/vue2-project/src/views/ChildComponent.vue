<template>
  <div>
    <div>{{value}}</div>
    <select @change="onChange">
        <option :selected="name==item" v-for="(item,index) in users" :key="index" :value="item">{{item}}</option>
    </select>
  </div>
</template>

<script>
export default {
  model: {
    prop: "name", // v-model绑定的属性名称
    event: "curChange", // v-model绑定的事件
  },
  props: {
    value: String, // value跟v-model无关
    name: {
      // name是跟v-model绑定的属性
      type: String,
      default: "",
    },
  },
  data(){
    return {
        users:["鲁迅","郁达夫","徐志摩"]
    }
  },
  methods:{
      onChange(val){
          this.$emit('curChange',val.target.value);
      }
  }
};
</script>

<style lang="scss" scoped></style>
