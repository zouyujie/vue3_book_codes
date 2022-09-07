<template>
  <p>{{ keyword }}</p>
  <input type="text" v-model="keyword" />
</template>
<script lang="ts">
import { customRef, defineComponent } from 'vue'
// 自定义hook防抖的函数
// value传入的数据,将来数据的类型不确定，所以采用泛型；delay表示防抖的间隔时间，默认设置为300毫秒
function useDebouncedRef<T>(value: T, delay = 300) {
  // 准备一个存储定时器的id的变量
  let timeOutId: number
  return customRef((track, trigger) => {
    return {
      // 返回数据的
      get() {
        // 告诉Vue追踪数据
        track()
        return value
      },
      // 设置数据的
      set(newValue: T) {
        // 先清理定时器
        clearTimeout(timeOutId)
        // 开启定时器
        timeOutId = setTimeout(() => {
          value = newValue
          // 告诉Vue更新界面
          trigger()
        }, delay)
      },
    }
  })
}
export default defineComponent({
  setup() {
    const keyword = useDebouncedRef('天涯客', 500)
    return {
      keyword,
    }
  },
})
</script>