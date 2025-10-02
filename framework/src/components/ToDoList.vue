<script setup lang="ts">
import {ref} from "vue";

type ToDo = {
  title: string;

}

const toDoList = ref<ToDo[]>([])



const title = ref('')


function onFormSubmit(event: SubmitEvent) {
  event.preventDefault();

  addToDo()
}


function addToDo() {
  if (title.value.trim() !== "") {
    const newTodo: ToDo = {
      title: title.value,

    };

    toDoList.value.push(newTodo)

    title.value = ""
  }
}





</script>

<template>
  <div>
    <form @submit="onFormSubmit">
      <input placeholder="Escribir nueva tarea" v-model="title" type="text"/>
      <button>Agregar Tarea</button>
    </form>


    <ul>
      <li v-for="(toDo, index) in toDoList" :key="index">
        {{ toDo.title }}
      </li>
    </ul>
  </div>


</template>

<style scoped>

</style>
