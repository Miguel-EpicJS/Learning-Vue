<template>
  <div>
    <calc-row @emit-row-value="sendValue($event)" value="7"></calc-row>
    <calc-row @emit-row-value="sendValue($event)" value="4"></calc-row>
    <calc-row @emit-row-value="sendValue($event)" value="0"></calc-row>
  </div>
</template>

<script>
import CalcRow from "./CalcRow.vue";

export default{
  components: { 'calc-row': CalcRow }, 
  name: 'calc-numbers',
  emits: ['send-value'],
  methods:{
    sendValue(value){
      this.$emit('send-value', value)
    }
  }
}
</script>

<style>

</style>