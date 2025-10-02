<script setup lang="ts">
import {ref} from "vue";
import type {ToDo} from "@/types.ts";
import {useToDoState} from "@/composables/useToDoState.ts";


const title = ref('')
const showError = ref(false)

const {addToDo} = useToDoState()



function onFormSubmit(event: SubmitEvent) {
  event.preventDefault();

  if (title.value.trim() !== "") {
    const newTodo: ToDo = {
      title: title.value,
    };
    addToDo(newTodo)
    title.value = ""
    showError.value = false
  }
  else {
    showError.value = true


  }
}

</script>

<template>
  <form @submit="onFormSubmit">
    <input placeholder="Escribir nueva tarea" v-model="title" type="text" />
    <button>Agregar Tarea</button>
    <p v-if="showError" class="error">Falta escribir tarea</p>
  </form>
</template>

<style scoped>
.error {
  color: red;
}
</style>
