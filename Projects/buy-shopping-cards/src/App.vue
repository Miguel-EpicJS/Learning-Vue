<template>
    <h1>Welcome to the Items Management Panel</h1>
    <create-item-form></create-item-form>
</template>

<script>
import createItemForm from './components/create-item-form.vue'
export default {
  components: { createItemForm },

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #0c447c;
    margin-top: 60px;
}
h1{
    font-size: 3rem;
}
.btn{
    font-size: 1.5rem;
    padding: .5rem .7rem;
    margin: 10px;
    border-radius: 20px;
    background: transparent;
    border: 1px solid;
    cursor: pointer;
    transition: all .4s;
}
.btn:hover{
    font-size: 1.7rem;
    background: #f3eded;
}
</style>