<template>
  <div></div>
</template>

<script>
// Vue.extend
// 创建构造器
var Profile = Vue.extend({
  template: "<p>{{firstName}}-{{lastName}}-{{alias}}</p>",
  data: function() {
    return {
      userName: "文泰来",
      nickName: "奔雷手",
      skill: "奔雷掌",
    };
  },
});
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount("#myApp");
//注册人一个全局组件
Vue.component('global-component', Profile);
</script>

<style lang="scss" scoped></style>
