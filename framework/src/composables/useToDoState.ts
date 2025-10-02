import {ref} from 'vue'
import type {ToDo} from "@/types.ts";


const toDoList = ref<ToDo[]>([])

export function useToDoState(){

  const addToDo = (newTodo: ToDo) => {
    toDoList.value.push(newTodo)
  }

  return {
    toDoList,
    addToDo
  }
}



