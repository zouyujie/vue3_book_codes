<template>
  <div class="time-tabs" :class="size">
    <span
      v-for="item in dataArr"
      :key="item[valueLabel]"
      :class="{ actived: activedKey === item[valueLabel] }"
      @click.stop="tabClick(item)"
    >
      <i v-if="item.icon" :class="item.icon" class="icon-color" />
      {{ item[nameLabel] }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent ,ref,computed} from "vue";
export default defineComponent({
  name: "time-tab",
  props: {
    dataArr: {
      // 数据列表数组
      type:Array,
      default: function () {
        return [
          // { label: '时', value: 1, icon: 'iconfont xxx' },
          // { label: '日', value: 2 },
        ];
      },
    },
    option: {
      // 数据数组中对象的键值属性
      type: Object,
      default: function () {
        return { label: "label", key: "value" };
      },
    },
    value: {
      // v-model绑定值
      type: [String, Number, Boolean],
      default: null,
    },
    returnItem: {
      type: Boolean,
    },
    size: {
      type: String,
    },
  },
  setup(props:any,{emit}) {
    let activedKey=ref(props.value);
     const nameLabel:any = computed(()=>{
        return (props.option || {}).label || "label";
    });
    const valueLabel:any=computed(()=>{
         return (props.option || {}).key || "value";
    })
    //切换选项
    const tabClick=function(item:any) {
      if (activedKey.value === item[valueLabel.value]) return;
         activedKey.value = item[valueLabel.value];
      if (props.returnItem) {
        emit("change", item[valueLabel.value], item);
      } else {
        emit("change", item[valueLabel.value]);
      }
    }
    // watch(props.value,()=>{
    //    activedKey.value = props.value;
    // })
    return {activedKey,nameLabel,valueLabel,tabClick};
  },
});
</script>

<style lang="scss" scoped>
$bgColor: white;
$border: 1px solid $theme-color;
.time-tabs {
  display: inline-block;
  span {
    height: 30px;
    line-height: 30px;
    display: inline-block;
    text-align: center;
    background: #fff;
    border: $border;
    border-right: none;
    cursor: pointer;
    box-sizing: border-box;
    min-width: 33px;
    // border-right: 1px solid #c3c9d5;
    padding: 0 10px;
    .icon-color {
      color: $bgColor;
    }
    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    &:last-child {
      border-right: $border;
      border-radius: 0 4px 4px 0;
    }
    &.actived {
      background: $theme-color;
      color: #fff;
      .icon-color {
        color: #fff;
      }
    }
  }
}
</style>
