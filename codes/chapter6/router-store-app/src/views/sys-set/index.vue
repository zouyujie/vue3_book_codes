<template>
  <nav>
    <router-link to="/sys-set/user-manage">用户管理</router-link> |
    <router-link to="/sys-set/role-manage">角色管理</router-link>
  </nav>
  <hr />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.active {
  color:lightgreen;
}
</style>