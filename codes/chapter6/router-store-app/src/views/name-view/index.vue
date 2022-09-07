<template>
  <router-view></router-view>
  <div class="content">
    <router-view name="sidebar"></router-view>
    <router-view name="main"></router-view>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
body {
  margin: 0px;
  padding: 0px;
}
.header {
  width: 100%;
  height: 70px;
  line-height: 70px;
  background-color: lightyellow;
}
.content {
  width: 100%;
  position: absolute;
  top: 70px;
  height: calc(100% - 70px);
}
.sidebar {
  width: 180px;
  height: 100%;
  background-color: lightgray;
  float: left;
}
.mainbox {
  width: calc(100% - 180px);
  height: 100%;
  background-color: lightgreen;
  float: left;
}
</style>