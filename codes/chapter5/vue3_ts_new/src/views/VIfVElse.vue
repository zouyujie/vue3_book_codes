<template>
 <h3>人生三大恨</h3>
 <dd v-if="show" v-for="(item,index) in list" :key="index">{{item}}</dd>
</template>

<script lang="ts">
import { defineComponent,readonly,ref  } from 'vue'

export default defineComponent({
    setup () {
        const list=readonly(['一恨鲫鱼多刺','二恨海棠无香','三恨红楼未完 ']);
        const show=ref(false);
        return {list,show}
    }
})
</script>

<style scoped>

</style>