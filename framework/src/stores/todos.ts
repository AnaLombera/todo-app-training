import { defineStore } from 'pinia'
import type { ToDo } from '@/types.ts'
import { ref } from 'vue'

export const useToDosStore = defineStore('todos', () => {
  const toDoList = ref<ToDo[]>([])

  const addToDo = (newTodo: ToDo) => {
    toDoList.value.push(newTodo)
  }

  return {
    toDoList: toDoList,
    addToDo,
  }
})
