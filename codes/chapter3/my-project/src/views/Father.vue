<template>
  <Son :parentName="name" :skill="skill" @func="show"></Son>
  <div class="parent">
    {{ name }}
    <span v-if="dataFormSon.name">
      有一个儿子叫{{ dataFormSon.name }}，今年{{ dataFormSon.age }}岁了</span
    >
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  components: {
    Son,
  },
  data() {
    return {
      name: "郭靖",
      skill: ["降龙十八掌", "九阴真经", "空明拳"],
      dataFormSon: {},
    };
  },
  methods: {
    show(data) {
      this.dataFormSon = data;
    },
  },
};
</script>

<style scoped>
.parent {
  background-color: lightpink;
}
</style>
