<template>
<!-- 尽管官方建议采用-分割的方式来定义组件标签，但是我这里为了复制粘贴方便，就直接复制了 -->
<!-- <defineAsyncComponentDemo></defineAsyncComponentDemo> -->
<!-- <SetupDemo></SetupDemo> -->
<!-- <RefDemo></RefDemo>
<ReactiveDemo></ReactiveDemo> -->
<!-- <Vue2Vue3></Vue2Vue3> -->
<!-- <SetupDetail></SetupDetail> -->
<!-- <ComputedWatch></ComputedWatch> -->
<!-- <LifeCycle></LifeCycle> -->
<!-- <ReactiveRef></ReactiveRef> -->
<!-- <MousePosition></MousePosition> -->
<!-- <RequestDemo></RequestDemo> -->
<!-- <ToRefsDemo></ToRefsDemo> -->
<!-- <InputRefDemo></InputRefDemo> -->
<!-- <ShallowReactiveDemo></ShallowReactiveDemo> -->
<!-- <ReadonlyDemo></ReadonlyDemo> -->
<!-- <ToRawDemo></ToRawDemo> -->
<!-- <ToRefDemo></ToRefDemo> -->
<UnRefDemo></UnRefDemo>
<!-- <CustomRefDemo></CustomRefDemo> -->
<!-- <ProvideInjectDemo></ProvideInjectDemo> -->
<!-- <IsRefDemo></IsRefDemo> -->

</template>
<script lang="ts">
import { defineComponent } from "vue";
import SetupDemo from './components/SetupDemo.vue';
import RefDemo from './components/RefDemo.vue';
import ReactiveDemo from './components/ReactiveDemo.vue';
import Vue2Vue3 from './components/Vue2Vue3.vue';
import SetupDetail from './components/SetupDetail.vue';
import ComputedWatch from './components/ComputedWatch.vue';
import LifeCycle from './components/life-cycle/index.vue';
import ReactiveRef from './components/ReactiveRef.vue';
import MousePosition from './views/MousePosition.vue';
import RequestDemo from './views/RequestDemo.vue'
import ToRefsDemo from './views/ToRefsDemo.vue'
import InputRefDemo from './views/InputRefDemo.vue';
import ShallowReactiveDemo from './views/ShallowReactiveDemo.vue';
import ReadonlyDemo from './views/ReadonlyDemo.vue';
import ToRawDemo from './views/ToRawDemo.vue';
import ToRefDemo from './views/to-ref-demo/index.vue';
import UnRefDemo from './views/UnRefDemo.vue';
import CustomRefDemo from './views/CustomRefDemo.vue';
import ProvideInjectDemo from './views/provide-inject/index.vue';
// import IsRefDemo from './views/IsRefDemo.vue';

export default defineComponent({
  name: "App",
  components:{
    // SetupDemo,
    // RefDemo,
    // ReactiveDemo,
    // Vue2Vue3,
    // SetupDetail,
    // ComputedWatch,
    // LifeCycle,
    // ReactiveRef,
    // MousePosition,
    // RequestDemo,
    // ToRefsDemo,
    // InputRefDemo,
    // ShallowReactiveDemo,
    // ReadonlyDemo,
    // ToRawDemo,
    // ToRefDemo,
    UnRefDemo,
    // CustomRefDemo,
    // ProvideInjectDemo,
    // IsRefDemo
  }
});
</script>

<style>
</style>
