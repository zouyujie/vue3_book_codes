<template>
  <div id="nav">
    <router-link to="/">FragmentDemo</router-link> |
    <router-link to="/cmodal">CModalDemo</router-link> |
    <router-link to="/suspense">SuspenseDemo</router-link> |
    <router-link to="/cvmodel">CVModel</router-link> |
    <router-link to="/vifvelse">VIfVElse</router-link> |
    <router-link to="/NextTickDemo">NextTickDemo</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
