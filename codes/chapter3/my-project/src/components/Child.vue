<template>
  <h4>{{ skill }}</h4>
  <input
    type="text"
    :value="skill"
    @input="$emit('update:skill', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    skill: {
      type: String
    }
  }
}
</script>