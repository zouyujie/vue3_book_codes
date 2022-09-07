<template>
  <button class="primary">
    <slot>默认值</slot>
    <slot name="icon"></slot>
    <slot name="other" :data="list"></slot>
  </button>
</template>

<script>
export default {
   data(){
     return {
        list:['一字长蛇','二龙出水','天地三才']
     }
   }
}
</script>

<style scoped>
button {
  padding: 5px 10px;
  color: #fff;
  border: none;
}
.primary {
  background: lightblue;
}
.warn {
    background: lightcoral;
}
</style>