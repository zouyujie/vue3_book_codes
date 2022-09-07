<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <LocaleDemo></LocaleDemo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LocaleDemo from "@/components/LocaleDemo.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    LocaleDemo,
  },
});
</script>
