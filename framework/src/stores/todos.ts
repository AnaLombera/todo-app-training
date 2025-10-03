import { defineStore } from 'pinia'
import type { ToDo } from '@/types.ts'
import { ref } from 'vue'

export const useToDosStore = defineStore('todos', () => {
  const toDoList = ref<ToDo[]>([])

  const addToDo = async (newTodo: ToDo) => {
    const apiURL = 'https://68bffd4a0b196b9ce1c2da70.mockapi.io/todos'
    const response = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })

    const json = await response.json()
    console.log(json)
    toDoList.value.push(json)
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
