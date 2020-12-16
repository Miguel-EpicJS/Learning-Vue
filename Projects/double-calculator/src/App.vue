<template>
  <div>
    <number-button number='1'></number-button>
    <number-button number='2'></number-button>
    <number-button number='3'></number-button>
  </div>
</template>

<script>
import NumberButton from './components/NumberButton.vue'

export default {
  name: 'App',
  components: {
    'number-button': NumberButton
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
