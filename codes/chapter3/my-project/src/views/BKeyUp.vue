<template>
  <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
  <input v-on:keyup.enter="submit"/>
</template>

<script>
export default {
  methods: {
    submit () {
      console.log("点击提交")
    }
  },
}
</script>