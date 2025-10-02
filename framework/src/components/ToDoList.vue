<script setup lang="ts">
import {ref} from "vue";
import type {ToDo} from "@/types.ts";



const toDoList = ref<ToDo[]>([])
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
