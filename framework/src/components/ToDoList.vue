<script setup lang="ts">
import {useToDoState} from "@/composables/useToDoState.ts";

const { toDoList } = useToDoState()


</script>

<template>
  <div>
    <ul>
      <li v-for="(toDo, index) in toDoList" :key="index">
        {{ toDo.title }}
      </li>
    </ul>
  </div>


</template>

<style scoped>

</style>
