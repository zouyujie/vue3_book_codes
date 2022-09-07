<template>
  当前数字：{{number}} <button @click="autoAdd">自增</button>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";

export default defineComponent({
  //  vue2的方式
  //    data(){
  //        return {
  //            number:0
  //        }
  //    },
  //    methods:{
  //        autoAdd(){
  //            this.number++;
  //        }
  //    }
  // vue3的方式
  setup() {
      const number=ref(0);
      console.log(number);
      function autoAdd(){
        number.value++;
      }
      return{number,autoAdd}
  }
});
</script>

<style scoped></style>
