<template>
 <span v-cloak>{{msg}}</span>
</template>

<script>
export default {
   data(){
       return {
           msg:'缘分转瞬即逝'
       }
   }
};
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
</style>
