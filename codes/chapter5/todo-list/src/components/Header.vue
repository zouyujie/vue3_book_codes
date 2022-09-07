<template>
  <div class="todo-header">
    <input type="text"
           placeholder="请输入你的任务名称，按回车键确认"
           v-model="title"
           @keyup.enter="onAdd" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// 引入接口
import { ITodo } from "../types/todo";
export default defineComponent({
  name: "Header",
  props: {
    //父组件传递过来的方法
    addTodo: {
      type: Function,
      required: true, //必须
    },
  },

  setup(props) {
    // 定义一个ref类型的数据
    const title = ref("");
    // 回车的事件的回调函数，用来添加数据
    const onAdd = () => {
      // 获取文本框中输入的数据，判断不为空
      const text = title.value;
      if (!text.trim()) return;
      // 此时有数据，则创建一个todo对象
      const todo:ITodo = {
        id: Date.now(),
        title: text,
        isCompleted: false,
      };
      // 调用父组件的addTodo方法
      props.addTodo(todo);
      // 清空文本框
      title.value = "";
    };
    return {
      title,
      onAdd,
    };
  },
});
</script>
<style lang="scss" scoped>
.todo-header {
  width: 100%;
  input {
    width: calc(100% - 14px);
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    &:focus {
      outline: none;
      border-color: rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(82, 168, 236, 0.6);
    }
  }
}
</style>