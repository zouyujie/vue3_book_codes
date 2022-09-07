<template>
  <div style='background-color: lightblue;'>
    <!-- <h3>{{ $store.state.count }}</h3> -->
    <h3>{{ $store.getters.optCount }}</h3>
  </div>
  <div style="background-color: lightcoral;">
    <input type="button"
           value="减少"
           @click="remove">
    <input type="button"
           value="增加"
           @click="add">
    <br>
    <input type="text"
           v-model="$store.state.count">
  </div>
  <h3>{{count}}</h3>
  <h3>{{count2}}</h3>
  <h3>{{count3}}</h3>
  <h3>{{count4}}</h3>
  <h3>{{optCount}}</h3>
  <h3>{{optCount1}}</h3>
</template>

<script>
import { defineComponent } from "vue";
// import store from '../store/index';
import { mapState } from 'vuex'
import { mapGetters,mapMutations } from 'vuex'

export default defineComponent({
  methods: {
    add () {
      // 千万不要这么使用，违背了vuex 的设计理念
      // this.$store.state.count++;
      this.$store.commit("increment");
    },
    remove () {
      this.$store.commit("subtract", { val: 1 });
    },
    ...mapMutations([
      'increment', // 将`this.increment()`映射为`this.$store.commit('increment')`
    ]),
    ...mapMutations({
      add: 'increment' // 将`this.add()`映射为`this.$store.commit('increment')`
    })
  },
  computed: {
    // 使用对象展开运算符将getter混入computed对象中
    ...mapGetters(["optCount"]),
    ...mapGetters({
      optCount1: "optCount"
    }),
    ...mapState({
      count3: (state) => state.count
    }),
    //或者
    ...mapState([
      "count"
    ]),
    // count(){
    //   return store.state.count;
    // },
    count2 () {
      return this.$store.state.count;
    },
    count4 () {
      return this.$store.getters.optCount;
    }
  },
  setup () {
    return {};
  },
});
</script>

<style scoped>
</style>