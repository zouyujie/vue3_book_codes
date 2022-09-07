<template>
  <div id="app">
    <!--<BModel/>-->
    <!-- <ModelDemo></ModelDemo> -->
    <ParentComponent></ParentComponent>
  </div>
</template>

<script>
//import BModel from './views/BModel.vue';
// import ModelDemo from './views/v-model/ModelDemo.vue';
import ParentComponent from './views/ParentComponent.vue';

export default {
  name: 'App',
  components: {
    //BModel,
    // ModelDemo,
    ParentComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
