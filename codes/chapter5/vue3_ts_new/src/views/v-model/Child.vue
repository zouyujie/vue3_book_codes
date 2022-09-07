<template>
  {{ value }}
  <input type="checkbox" value="小李飞刀" @change="onChange" />
</template>

<script>
export default {
  model: {
    prop: "checked", // v-model绑定的属性名称
    event: "change", // v-model绑定的事件
  },
  props: {
    value: String, // value跟v-model无关
    // checked是跟v-model绑定的属性
    checked: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onChange (val) {
      this.$emit('change', val);
    }
  }
}

</script>

<style lang="scss" scoped>
</style>

