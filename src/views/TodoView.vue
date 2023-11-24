<script setup>
import TodoList from '@/components/TodoList.vue'
import TodoForm from '@/components/TodoForm.vue'
</script>

<template>
  <main>
    <div class="container rounded-lg shadow-lg bg-white mt-5">
      <TodoList class="p-10" />
    </div>
    <div class="container-lg rounded-lg shadow-lg bg-white -mt-10 mx-40">
      <TodoForm class="p-10" />
    </div>
  </main>
</template>
