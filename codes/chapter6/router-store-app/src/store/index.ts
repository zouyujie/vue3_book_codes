import { createStore } from 'vuex';
import appGlobal from './app-global';

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    //自增
    increment(state) {
      state.count++;
    },
    //自减
    subtract(state, obj) {
      state.count -= obj.val;
    },
  },
  getters: {
    optCount: function(state) {
      return '当前最新的count值是：' + state.count;
    },
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  modules: {
    appGlobal
  },
});
