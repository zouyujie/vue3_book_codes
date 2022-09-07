<template>
  <!--vue2根标签-->
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js" />
  </div>
  <!-- vue3 可以不需要根标签-->
  <HelloWorld msg="Welcome to Your Vue.js" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
