<template>
  <div class="todo-container">
    <div class="todo-block">
      <Header :addTodo="addTodo" />
      <List :todos="todos"
            :deleteTodo="deleteTodo"
            :updateTodo="updateTodo" />
      <Footer :todos="todos"
              :checkAll="checkAll"
              :clearAllCompletedTodos="clearAllCompletedTodos" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
// 引入相关的子级组件
import Header from "../components/Header.vue";
import List from "../components/List.vue";
import Footer from "../components/Footer.vue";
// 引入接口
import { ITodo } from "../types/todo";
import { saveTodos, readTodos } from "../utils/local-storage-utils";

export default defineComponent({
  name: "Home",
  // 注册组件
  components: {
    Header,
    List,
    Footer,
  },
  // 数据应该用对象数组来存储,数组中的每个数据都是一个对象，对象中应该有三个属性(id,title,isCompleted)
  setup() {
    // 定义一个数组数据
    const state = reactive<{ todos: ITodo[] }>({
      todos: [],
    });
     //界面一加载马上读取数据
    state.todos = readTodos();
    // 添加数据的方法
    const addTodo = (todo: ITodo) => {
      state.todos.unshift(todo); //添加到顶部
    };
    // 删除数据的方法
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1);
    };
    // 修改todo的isCompleted属性的状态
    const updateTodo = (todo: ITodo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted;
    };
    //全选或者全不选
    const checkAll = (isCompleted: boolean) => {
      //遍历数组进行更新
      state.todos.forEach((todo) => {
        todo.isCompleted = isCompleted;
      });
    };
    // 清理所有选中的数据
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    };
    // 监视数据变化：如果todos数组的数据变化了，直接存储到浏览器的缓存中，删除、添加、更新数据时都将自动执行这个钩子函数
    watch(() => state.todos, saveTodos, { deep: true });

    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos
    };
  },
});
</script>
<style lang="scss" scoped>
.todo-container {
  width: 500px;
  margin: 0 auto; //水平居中
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  .todo-block {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>