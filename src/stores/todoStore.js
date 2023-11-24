import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id: 0
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item: item, id: this.id++, completed: false })
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((object) => object.id === idToFind)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})
