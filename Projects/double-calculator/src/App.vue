<template>
  <div>
    <data-visualizer :op="numbers" :res="result"></data-visualizer>
    <calc-number @send-value="numbers += $event"></calc-number>
    <calc-buttons @calc-operation="valid($event)"></calc-buttons>
  </div>
</template>

<script>
import CalcButtons from './components/Calculator/CalcButtons.vue'
import CalcNumber from './components/Calculator/CalcNumber.vue'
import DataVisualizer from './components/Calculator/Visualizer.vue'

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
      if(op === '='){
        this.result = eval(this.numbers)
      }else if(op === 'CE' )
      {
        this.numbers = this.numbers.substring(0,this.numbers.length-1);
      }
      else{
        this.numbers += op        
      }
    }
  },
  components: {
    'calc-number': CalcNumber,
    'calc-buttons': CalcButtons,
    'data-visualizer': DataVisualizer,
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
