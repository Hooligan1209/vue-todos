<template>
  <div class="todo-container">
    <div class="todo-wrap">

      <todo-header :add-item="addItem"></todo-header>

      <todo-content :todos="todos" :delete-item="deleteItem"></todo-content>

      <todo-footer :todos="todos" :remove-done="removeDone" :update-todos="updateTodos"></todo-footer>

    </div>
  </div>
</template>

<script>
  import header from './components/header.vue'
  import content from './components/content.vue'
  import footer from './components/footer.vue'
  import localStorageUtil from './util/localStorageUtil'
export default {

  data () {
      return {
          todos: []
      }
  },
  created () {
      this.todos = localStorageUtil.getTodos()
  },

  methods: {
    addItem (todo) {
          this.todos.unshift(todo)
      },
    deleteItem (index) {
          this.todos.splice(index , 1)
    },
    removeDone () {
        this.todos = this.todos.filter(todo => !todo.complete)
    },
    updateTodos (isDone) {
        this.todos.forEach(todo => {
            todo.complete = isDone
        })
    },
  },

  watch: {
      todos: {
        deep: true,
        handler: localStorageUtil.saveTodos
      }
  },

  components: {
    'todo-header':header,
    'todo-content':content,
    'todo-footer': footer
  },

}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
