<script setup lang="ts">
import { useToDosStore } from '@/stores/todos.ts'

const store = useToDosStore()
</script>

<template>
  <div>
    <ul>
      <li v-for="(toDo, index) in store.toDoList" :key="index">
        {{ toDo.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
