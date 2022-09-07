<template>
  <ul class="todo-list">
    <Item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :deleteTodo="deleteTodo"
      :updateTodo="updateTodo"
      :index="index"
    />
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// 引入子级组件
import Item from './Item.vue'
export default defineComponent({
  name: 'List',
  components: {
    Item,
  },
  props: ['todos', 'deleteTodo', 'updateTodo'],
})
</script>
<style scoped>
.todo-list {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
  width: 100%;
}
</style>