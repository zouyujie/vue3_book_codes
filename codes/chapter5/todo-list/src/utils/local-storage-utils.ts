import { ITodo } from '../types/todo'
// 保存数据到浏览器的缓存中
export function saveTodos(todos: ITodo[]) {
  localStorage.setItem('todos_key', JSON.stringify(todos))
}
// 从浏览器的缓存中读取数据
export function readTodos(): ITodo[] {
  return JSON.parse(localStorage.getItem('todos_key') || '[]')
}