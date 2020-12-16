<template>
  <div>
    <calc-row value="7"></calc-row>
    <calc-row value="4"></calc-row>
    <calc-row value="1"></calc-row>
  </div>
</template>

<script>
import CalcRow from './components/CalcRow.vue'

export default {
  name: 'App',
  data(){
    return{
      numbers: ''
    }
  },
  components: {
    'calc-row': CalcRow
  },
  methos:{
    addNumbers(value){
      this.numbers += value
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
