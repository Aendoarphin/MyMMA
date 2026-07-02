<script setup lang="ts">
import { useFetch } from "@/composables/fetch"


  const pageName = "HomeView"

  type Todo = {
    id: number
    title: string
    completed: boolean
    userId: number
  }

  const {data, error, loading} = useFetch<Todo[]>('https://jsonplaceholder.typicode.com/todos')

</script>
<template>
  {{ pageName }}
  <p v-if="loading">Loading...</p>
  <p v-if="error">Error: {{ error }}</p>
  <p v-for="todo in data" :key="todo.id">{{ todo.title }}</p>
</template>
