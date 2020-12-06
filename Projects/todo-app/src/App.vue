<template>
  <h1>Vue 3 Todo App</h1>
  <form @submit.prevent="addNewTodo">
    <label for="new-todo">New Todo</label><br>
    <input v-model="data.newTodo" type="text" name="new-todo" id="new-todo"/><br>
    <button type="submit">Add New Todo</button>
  </form>
  <button @click="markAll()">Mark All Done</button>
  <ul>
    <li v-for="(todo, ind) in data.todos" :key="todo.id">
      <h3 :class="{ done: todo.done }" @click=" todo.done = !todo.done "> {{ todo.content }} </h3>
      <input id="done" type="checkbox" v-model="todo.done">
      <label for="done"> Done</label><br>
      <button @click="del(ind)">Delete</button>
    </li>
  </ul>
</template>

<script>
import {reactive} from 'vue';

export default {
  name: 'App',
  setup(){

    const data = reactive({
      newTodo: '',       
      todos: [],
    })

    function addNewTodo(){
      data.todos.push({
        id: Date.now,
        done: false,
        content: data.newTodo,
      })
      data.newTodo = ''
    }
    
    function del(ind){
      data.todos.splice(ind, 1);
    }

    function markAll(){
      data.todos.forEach((todo) => todo.done = true)
    }

    return {
      data,
      addNewTodo,
      del,
      markAll,
    }
  }
};
</script>

<style>
body {
  font-family: sans-serif;
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 2em;
  width: 80%;
  margin: 0 auto;
}
.done{
  text-decoration: red line-through;
}
</style>
