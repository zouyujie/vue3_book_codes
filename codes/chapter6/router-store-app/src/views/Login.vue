<template>
  这是登录页面
  <h3>登录组件---{{ $route.query.name }} --- {{ $route.query.pwd }}</h3>
  <h3>登录组件---{{ $route.params.name }} --- {{ $route.params.pwd }}</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute} from "vue-router";

export default defineComponent({
  created(){
     console.log(this.$route);
  },
  setup () {   
    return {}
  }
})
</script>