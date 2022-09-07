<template>
  <h2>Child子组件</h2>
  <h3>名字：{{ name }}，名字长度：{{ length }}</h3>
</template>
<script lang="ts">
import { defineComponent, computed, Ref, toRef } from 'vue'
function useGetLength(name: Ref) {
  return computed(() => {
    return name.value.length
  })
}
export default defineComponent({
  name: 'Child',
  props: {
    name: {
      type: String,
      required: true, // 必须的
    },
  },
  setup(props) {
    const length = useGetLength(toRef(props, 'name'))
    return {
      length,
    }
  },
})
</script>