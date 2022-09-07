const appGlobal = {
  state: {
    themeName:'dark'
  },
  getters: {
    getThemeName:(state:any)=>{
      return state.themeName;
    }
  },
  mutations: {
     changeTheme(state:any,val:string){
      state.themeName=val;
     }
  },
  actions: {
     changeThemeAsync ({ commit }:any,val:string) {
      setTimeout(() => {
        commit('changeTheme',val)
      }, 1000)
    }
  },
  namespaced: true // 开启命名空间
}
export default appGlobal