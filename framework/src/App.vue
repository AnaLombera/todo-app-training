<script setup lang="ts">
import BaseFooter from '@/components/BaseFooter.vue'
import ToDoList from '@/components/ToDoList.vue'
import ToDoForm from '@/components/ToDoForm.vue'
import { useToDosStore } from '@/stores/todos.ts'

const store = useToDosStore()

store.loadToDos()
</script>

<template>
  <h1>To Do App</h1>
  <p>Lista de teras</p>

  <ToDoForm />

  <ToDoList />
  <BaseFooter />
</template>

<style scoped></style>
