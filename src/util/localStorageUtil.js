/**
 * Created by bf1209 on 2017/7/25.
 */
const TODOS_KEY = 'todos_key';
export default {
  saveTodos (todos) {
    localStorage.setItem(TODOS_KEY ,JSON.stringify(todos))
  },
  getTodos () {
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  }
}

