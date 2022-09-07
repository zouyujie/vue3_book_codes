<template>
    <div class="custom-input">
        <h3>自定义文本框</h3>
        <input  type="text" :value="value" @input="onInput"/>
          <input  type="text" :value="title" @input="onTitleInput"/>
    </div>
</template>

<script>
   export default {
        props:["value","title"],
        methods:{
            onInput(event){
                this.$emit("input",event.target.value);
            },
            onTitleInput(event){
                this.$emit("update:title",event.target.value)
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>