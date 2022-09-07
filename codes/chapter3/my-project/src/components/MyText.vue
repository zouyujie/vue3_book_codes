<template>
    <div class="my-text">
     <input type="text" v-bind="$attrs"/>
    </div>
</template>

<script>
    export default {
        inheritAttrs:false
    }
</script>

<style  scoped>
.my-text{
 font-size: 16px;
}
</style>