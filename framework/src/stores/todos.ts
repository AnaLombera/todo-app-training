import { defineStore } from 'pinia'
import type { ToDo } from '@/types.ts'
import { ref } from 'vue'

export const useToDosStore = defineStore('todos', () => {
  const toDoList = ref<ToDo[]>([])

  const addToDo = (newTodo: ToDo) => {
    toDoList.value.push(newTodo)
  }

  const loadToDos = async () => {
    const apiURL = 'https://68bffd4a0b196b9ce1c2da70.mockapi.io/todos'
    const response = await fetch(apiURL, {
      headers: {
        Accept: 'application/json',
      },
    })

    toDoList.value = (await response.json()) as ToDo[]
  }

  return {
    // state
    toDoList: toDoList,
    // actions
    addToDo,
    loadToDos,
  }
})
