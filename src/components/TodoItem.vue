<script setup>
//access to the store
import { useTodoListStore } from '@/stores/todoStore'

// local store to use
const todoListStore = useTodoListStore()
const { toggleCompleted } = todoListStore

defineProps({
  todoItem: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex justify-between gap-x-6 py-5">
    <div class="relative flex items-start">
      <div class="flex items-center h-5 mt-1">
        <input
          id="hs-checkbox-delete"
          name="hs-checkbox-delete"
          type="checkbox"
          class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          aria-describedby="hs-checkbox-delete-description"
          :checked="todoItem.completed"
          @change="toggleCompleted(todoItem.id)"
        />
      </div>
      <label for="hs-checkbox-delete" class="ms-3">
        <span class="block text-sm font-semibold leading-6 text-gray-900">{{
          todoItem.title
        }}</span>
        <span class="block mt-1 truncate text-xs leading-5 text-gray-500">{{
          todoItem.description
        }}</span>
      </label>
    </div>
  </div>
</template>
