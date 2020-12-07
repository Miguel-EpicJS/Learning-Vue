<template>
  <h1>Client CRUD</h1>
  <create-box @sending-data="dat = $event"></create-box>
  <read-box :clients="dat"></read-box>
</template>

<script>
import createBox from './components/create-box.vue'
import readBox from './components/read-box.vue'

export default {
  components: { createBox, readBox },
  name: 'App',
  data(){
    return{
      dat: [],
    }
  },
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
