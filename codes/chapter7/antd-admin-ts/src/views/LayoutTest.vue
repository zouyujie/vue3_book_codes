<template>
    <div>
    <layout></layout>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import layout from '@/layout/index.vue'

export default defineComponent({
    components:{
        layout
    },
    setup () {
        return {}
    }
})
</script>

<style scoped>

</style>