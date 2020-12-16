<template>
  <div>
    <calc-number @send-value="numbers += $event"></calc-number>
    <calc-buttons @calc-operation="valid($event)"></calc-buttons>
  </div>
</template>

<script>
import CalcButtons from './components/CalcButtons.vue'
import CalcNumber from './components/CalcNumber.vue'

export default {
  name: 'App',
  data(){
    return{
      numbers: '',
      result: ''
    }
  },
  methods:{
    valid(op){
      if(op != '='){
        this.numbers += op
      }else{
        this.result = eval(this.numbers)
      }
    }
  },
  components: {
    'calc-number': CalcNumber,
    CalcButtons
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
