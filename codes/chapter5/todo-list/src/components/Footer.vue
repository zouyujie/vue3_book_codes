<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox"
             v-model="isCheckAll" />
    </label>
    <span>
      <span>已完成{{ count }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger"
            @click="clearAllCompletedTodos">
      清除已完成任务
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { ITodo } from "../types/todo";
export default defineComponent({
  name: "Footer",
  props: {
    todos: {
      type: Array as () => ITodo[],
      required: true,
    },
    checkAll: {
      type: Function,
      required: true,
    },
    clearAllCompletedTodos: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    // 已完成的计算属性操作
    const count = computed(() => {
      return props.todos.reduce(
        (pre, todo, index) => pre + (todo.isCompleted ? 1 : 0),
        0
      );
    });
    // 全选/全不选的计算属性操作
    const isCheckAll = computed({
      get() {
        return count.value > 0 && props.todos.length === count.value;
      },
      set(val) {
        props.checkAll(val);
      },
    });
    return {
      count,
      isCheckAll,
    };
  },
});
</script>
<style lang="scss" scoped>
.todo-footer {
  padding-left: 6px;
  display: flex;
  align-items: center;
  width: 100%;
  label {
    display: inline-block;
    cursor: pointer;
    height: 23px;
    line-height: 25px;
    input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
  button {
    margin-left: auto;
    cursor: pointer;
    &:hover {
      color: lightcoral;
    }
  }
}
</style>