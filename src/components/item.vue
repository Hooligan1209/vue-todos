<template>
    <li @mouseenter="selectItem(true)" @mouseleave="selectItem(false)" :style="{background: bgColor}">
      <label>
        <input type="checkbox" v-model="todo.complete" />
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="rmItem">删除</button>
    </li>
</template>

<script>
  export default {
    props: {
      todo: Object,
      index: Number,
      deleteItem: Function
    },
    data () {
      return {
        bgColor: 'white',
        isShow: false
      }
    },
    methods: {
      selectItem (isHover) {
           if(isHover){
              this.bgColor = "#eee";
             this.isShow = true
           }else{
             this.bgColor = "white";
             this.isShow = false
           }
      },
      rmItem () {
          const {title} = this.todo;
           if(confirm(`确定要删除${title}吗？`)){
                this.deleteItem(this.index)
           }
      }
    }
  }
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }


</style>
