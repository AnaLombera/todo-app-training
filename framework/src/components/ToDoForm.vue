<script setup lang="ts">
import {ref} from "vue";
import type {ToDo} from "@/types.ts";

const title = ref('')

function addToDo() {
  if (title.value.trim() !== "") {
    const newTodo: ToDo = {
      title: title.value,

    };

    //toDoList.value.push(newTodo)

    title.value = ""
  }
}

function onFormSubmit(event: SubmitEvent) {
  event.preventDefault();

  addToDo()
}

</script>

<template>
  <form @submit="onFormSubmit">
    <input placeholder="Escribir nueva tarea" v-model="title" type="text"/>
    <button>Agregar Tarea</button>
  </form>
</template>

<style scoped>

</style>
