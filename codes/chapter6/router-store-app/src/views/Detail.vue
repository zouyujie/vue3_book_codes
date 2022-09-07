<template>
    <div>
   {{$route.params.msg}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {useRouter} from 'vue-router'
export default defineComponent({
    setup () {
        const router=useRouter();
        router.push({name:'detail',params:{msg:'只叹江湖几人回'}})
        return {}
    }
})
</script>

<style scoped>

</style>