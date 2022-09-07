<template>
  <div>{{resVal}}</div>
</template>

<script>
export default {
  setup() {
    const StateValue = ref("针头很大，你先忍一下");
    const resVal = unRef(stateValue);
    return {resVal};
  },
};
</script>

<style lang="scss" scoped></style>
