<template> <div></div></template>

<script lang="ts">
// Object.defineProperty(data, 'num', {
//     get () {},
//     set () {}
// })

// new Proxy(data, {
// 	// 拦截读取属性值
//     get (target, prop) {
//     	return Reflect.get(target, prop)
//     },
//     // 拦截设置属性值或添加新属性
//     set (target, prop, value) {
//     	return Reflect.set(target, prop, value)
//     },
//     // 拦截删除属性
//     deleteProperty (target, prop) {
//     	return Reflect.deleteProperty(target, prop)
//     }
// })
// proxy.name = 'jiekzou';

import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const user: any = {
      name: "曾阿牛",
      age: 18,
    };
    /* 
    proxyUser是代理对象, user是被代理对象
    通过代理对象中的Reflect来操作被代理对象内部属性
    */
    const proxyUser = new Proxy(user, {
      get(target, prop) {
        console.log("劫持get", prop);
        return Reflect.get(target, prop);
      },

      set(target, prop, val) {
        console.log("劫持set", prop, val);
        return Reflect.set(target, prop, val); // (2)
      },

      deleteProperty(target, prop) {
        console.log("劫持delete", prop);
        return Reflect.deleteProperty(target, prop);
      },
    });
    // 读取属性值
    console.log(proxyUser === user); //false
    console.log(proxyUser.name, proxyUser.age); //曾阿牛 18

    // 设置属性值
    proxyUser.name = "张无忌";
    proxyUser.age = 21;
    console.log(user); //{name: "张无忌", age: 21}
    // 添加属性
    proxyUser.sex = "男";
    console.log(user); //{name: "张无忌", age: 21, sex: "男"}

    // 删除属性
    delete proxyUser.sex;
    console.log(user); //{name: "张无忌", age: 21}
    return {};
  },
});
</script>

<style scoped></style>
