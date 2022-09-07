<template>
 <h3>当前主题：{{themeName}}</h3>
 <h3>当前主题：{{getThemeName}}</h3>
 <button @click="changeThemeAsync('light')">更新主题</button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore,mapGetters,mapActions } from "vuex";


export default defineComponent({
  computed: {
     ...mapGetters('appGlobal', ['getThemeName']),
  },
  methods:{
      ...mapActions('appGlobal', ['changeThemeAsync']),
  },
  setup() {
    const store = useStore();
    return {
       themeName: computed(() => store.state.appGlobal.themeName),
    };
  },
});
</script>

<style scoped>
</style>