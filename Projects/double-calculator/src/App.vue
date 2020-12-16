<template>
  <div>
    <number-button @emit-value='addNumbers($event)' number='1'></number-button>
    <number-button @emit-value='addNumbers($event)' number='2'></number-button>
    <number-button @emit-value='addNumbers($event)' number='3'></number-button>
    {{numbers}}
  </div>
</template>

<script>
import NumberButton from './components/NumberButton.vue'

export default {
  name: 'App',
  data(){
    return{
      numbers: ''
    }
  },
  components: {
    'number-button': NumberButton
  },
  methods:{
    addNumbers(value){
      this.numbers += value
    }
  }
}
</script>

<style>
    NumberButton
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
