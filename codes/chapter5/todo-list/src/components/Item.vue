<template>
  <li @mouseenter="mouseHandler(true)"
      @mouseleave="mouseHandler(false)"
     >
    <label>
      <input type="checkbox"
             v-model="isComptete" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger"
            v-show="isShow"
            @click="delTodo">
      删除
    </button>
  </li>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
// 引入接口
import { ITodo } from "../types/todo";
export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as () => ITodo, // 函数返回的是ITodo类型
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    updateTodo: {
      type: Function,
      required: true,
    },
  },

  setup(props) {
    // 设置按钮默认不显示
    const isShow = ref(false);
    // 鼠标进入和离开事件的回调函数
    const mouseHandler = (flag: boolean) => {
      if (flag) {
        // 鼠标进入
        isShow.value = true;
      } else {
        // 鼠标离开
        isShow.value = false;
      }
    };
    // 删除数据的方法
    const delTodo = () => {
      // 提示
      if (window.confirm("确定要删除吗?")) {
        props.deleteTodo(props.index);
      }
    };
    // 计算属性的方式---来让当前的复选框选中/不选中
    const isComptete = computed({
      get() {
        return props.todo.isCompleted;
      },
      set(val) {
        props.updateTodo(props.todo, val);
      },
    });
    return {
      mouseHandler,
      isShow,
      delTodo,
      isComptete,
    };
  },
});
</script>
<style lang="scss" scoped>
li {
  list-style: none;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  &:hover{
    color:green;
    background-color:lightskyblue;
  }
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    li {
      input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
      }
    }
  }
  button {
    margin-left: auto;//定位到右边
    cursor: pointer;
    &:hover{
      color:lightcoral;
    }
  }
  &:before {
    content: initial;
  }
  &:last-child {
    border-bottom: none;
  }
}
</style>