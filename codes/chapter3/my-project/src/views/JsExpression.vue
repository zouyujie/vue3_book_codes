<template>
<!-- JavaScript 表达式 -->
<div>{{ age + 1 }}</div>
<div>{{ isSuccess ? '兼济天下' : '独善其身' }}</div>
<div>{{ message.split('').reverse().join('') }}</div>
<div v-bind:id="'list-' + id">{{'list-' + id}}</div>

<!-- 以下直接回报错 -->
<!-- 这是语句，不是表达式 -->
<!-- {{ var age = 1 }} -->
<!-- 流控制也不会生效，请使用三元表达式 -->
<!-- {{ if (isSuccess) { return message } }} -->

</template>

<script>
    export default {
        data(){
            return {
              age:16,
              isSuccess:true,
              message:'心清可品茶',
              id:1,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>