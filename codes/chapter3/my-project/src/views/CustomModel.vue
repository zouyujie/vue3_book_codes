<template>
  <p>{{ skill }}</p>
  <Child v-model:skill="skill"></Child>
</template>

<script>
import Child from '../components/Child';
export default {
  components: {
    Child,
  },
  data () {
    return {
      skill: '七十二变',
    }
  },
}
</script>
