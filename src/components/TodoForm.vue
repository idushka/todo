<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '@/stores/todoStore'

const todo = ref('')
const todoStore = useTodoListStore()

function addTodoAndClear(item) {
  if (item.length === 0) {
    return
  }
  todoStore.addTodo(item)
  todo.value = ''
}
</script>
<template>
  <div>
    <form @submit.prevent="addTodoAndClear(todo)">
      <input
        v-model="todo"
        type="text"
        placeholder="Title"
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      />
      <textarea
        v-model="todo"
        placeholder="Description ..."
        class="-mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
        Save
      </button>
    </form>
  </div>
</template>
