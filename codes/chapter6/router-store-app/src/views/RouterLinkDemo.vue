<template>
  <div>
    <router-link
      to="/about"
      v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <NavLink :active="isActive" :href="href" @click="navigate" :class="isExactActive && 'router-link-exact-active'">{{
        route.fullPath
      }}</NavLink>
    </router-link>
    <router-link
      to="/foo"
      v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <li
        :class="[
          isActive && 'router-link-active',
          isExactActive && 'router-link-exact-active',
        ]"
      >
        <a :href="href" @click="navigate">{{ route.fullPath }}</a>
      </li>
    </router-link>
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

<style scoped></style>
