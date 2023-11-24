<script setup>
import { onMounted } from 'vue'
import { useTodoListStore } from '@/stores/todoStore'
import { storeToRefs } from 'pinia'
import TodoItem from '@/components/TodoItem.vue'
import TodoService from '@/services/TodoService'

const todoListStore = useTodoListStore()
let { todoList } = storeToRefs(todoListStore)

onMounted(() => {
  TodoService.getTodos()
    .then((response) => {
      todoList.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>
<template>
  <div class="divide-y divide-gray-100">
    <TodoItem v-for="todo in todoList" :key="todo.id" :todo-item="todo" />
  </div>
</template>
