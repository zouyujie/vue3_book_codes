<template>
  <!--对话框组件代码-->
  <teleport to="body">
    <div class="model-bg"
         v-show="visible">
      <div class="modal-content">
        <button class="close"
                @click="$emit('close-model')">X</button>
        <div class="model-title">{{title}}</div>
        <div class="model-body">
          <slot>
           秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。
          </slot>
        </div>
      </div>
    </div>

  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["title", "visible"],
  setup() {
    return { };
  },
});
</script>

<style lang="scss" scoped>
.model-bg {
  background: #000;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
}

.modal-content {
  width: 600px;
  min-height: 300px;
  border: 1px solid #eee;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;

  .model-title {
    background: #eee;
    color: #000;
    height: 32px;
    line-height: 32px;
    text-align: center;
  }

  .model-body {
    padding: 40px;
  }

  .close {
    position: absolute;
    right: 10px;
    top: 5px;
    padding: 5px;
    border: none;
    cursor: pointer;
  }
}
</style>