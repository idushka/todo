import axios from 'axios'

// Create axios defaults
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/idushka/todo',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTodos() {
    return apiClient.get('/todos')
  }
}
