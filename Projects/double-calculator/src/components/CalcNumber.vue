<template>
  <div>
    <calc-row value="7"></calc-row>
    <calc-row value="4"></calc-row>
    <calc-row value="1"></calc-row>
  </div>
</template>

<script>
import CalcRow from "./CalcRow.vue";

export default{
  components: { 'calc-row': CalcRow }, 
  name: 'calc-numbers',
}
</script>

<style>

</style>