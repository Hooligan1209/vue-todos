<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllDone"/>
    </label>
    <span>
          <span>已完成{{doneCoin}}</span> / 全部{{totalCount}}
        </span>
    <button class="btn btn-danger" @click="removeDone" v-show="totalCount">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: {
      removeDone: Function,
      updateTodos: Function,
      todos: Array

    },
    computed: {
        isAllDone: {
          get () {
             return this.todos.filter(todo => !todo.complete).length ===0 && this.todos.length > 0
            },
          set (value) {
              this.updateTodos(value)
          }
        },
        doneCoin () {
            return this.todos.filter(todo => todo.complete).length
        },
        totalCount () {
            return this.todos.length
        }
    }
  }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }


</style>
