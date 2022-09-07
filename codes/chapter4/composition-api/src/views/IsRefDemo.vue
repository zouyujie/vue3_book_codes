<template>
  <div>

  </div>
</template>

<script lang="ts">
import { defineComponent,ref,reactive,readonly, isRef,isReactive,isReadonly,isProxy } from 'vue'

export default defineComponent({
  setup () {
     // isRef: 检查一个值是否为一个 ref 对象
      console.log(isRef(ref({})));//true
      // isReactive: 检查一个对象是否是由 reactive 创建的响应式代理
      console.log(isReactive(reactive({})));//true
      // isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
      console.log(isReadonly(readonly({})));//true
      // isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
      console.log(isProxy(readonly({})));//true
      console.log(isProxy(reactive({})));//true
      return{}
  }
})
</script>