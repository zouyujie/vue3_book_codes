<template>
  <!-- 使用组件 -->
  <!-- <b-text></b-text> -->
  <!-- <b-html/> -->
  <!-- <BForKey></BForKey> -->
  <!-- <BOn></BOn> -->
  <!-- <BEvent></BEvent> -->
  <!-- <BEventModifier></BEventModifier> -->
  <!-- <BKeyUp></BKeyUp> -->
  <!-- <BStyleClass></BStyleClass> -->
  <!-- <CustomModel></CustomModel> -->
  <!-- <SlotBtn></SlotBtn> -->
  <!-- <AttributePage></AttributePage> -->
  <!-- <RefDom></RefDom> -->
  <!-- <RefDomNew></RefDomNew> -->
  <!-- <ParentDemo></ParentDemo>
  <FormDemo></FormDemo> -->
  <!-- <JsExpression></JsExpression> -->
  <!-- <Conditionals></Conditionals> -->
  <!-- <ComputedDemo></ComputedDemo> -->
  <!-- <WatchDemo></WatchDemo> -->
  <!-- <Father></Father> -->
  <!-- <NextTickDemo></NextTickDemo> -->
  <!-- <ExtendsMixins></ExtendsMixins> -->
  <!-- <ModelDemo></ModelDemo> -->
  <!-- <BOnce></BOnce> -->
  <BPre></BPre>
</template>

<script lang="ts">
// 这里可以使用ts代码
//defineComponent函数表示定义一个组件，内部可以传入一个配置对象
import { defineComponent } from "vue";
//引入组件
// import BText from './views/BText.vue';
// import BHtml from './views/BHtml.vue';
// import BForKey from './views/BForKey.vue';
// import BOn from "./views/BOn.vue";
// import BEvent from "./views/BEvent.vue";
// import BEventModifier from './views/BEventModifier.vue';
// import BKeyUp from './views/BKeyUp.vue';
// import CustomModel from "./views/CustomModel.vue";
// import BStyleClass from './views/BStyleClass.vue';
// import SlotBtn from './views/SlotBtn.vue';
// import AttributePage from "./views/AttributePage.vue";
// import RefDom from './views/RefDom.vue';
// import RefDomNew from './views/ref/index.vue';
// import ParentDemo from "./views/parent/index.vue";
// import FormDemo from './views/FormDemo.vue';
// import JsExpression from "./views/JsExpression.vue";
// import Conditionals from "./views/Conditionals.vue";
// import ComputedDemo from "./views/ComputedDemo.vue";
// import WatchDemo from "./views/WatchDemo.vue";
// import Father from "./views/Father.vue";
// import NextTickDemo from "./views/NextTickDemo.vue";
// import ExtendsMixins from "./views/ExtendsMixins.vue";
// import ModelDemo from './views/v-model/ModelDemo.vue';
// import BOnce from './views/BOnce.vue';
import BPre from './views/BPre.vue';

//暴露出去一个定义好的组件
export default defineComponent({
  name: "App", //指定组件名称
  //注册组件
  components: {
    // BText,
    // BHtml,
    // BForKey,
    // BOn,
    // BEvent,
    // BEventModifier,
    // BKeyUp,
    // CustomModel,
    // BStyleClass,
    // SlotBtn,
    // AttributePage,
    // RefDom,
    // ParentDemo,
    // RefDomNew,
    // FormDemo,
    // JsExpression,
    // Conditionals,
    // ComputedDemo,
    // WatchDemo,
    // Father,
    // NextTickDemo,
    // ExtendsMixins,
    // ModelDemo,
    // BOnce,
    BPre
  },
  methods: {
    say() {
      console.log("我是一代目");
    },
  },
});
</script>

<style>
#app {
  margin: 10px;
}
</style>
