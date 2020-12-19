<template>
  <div>
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    home: Home
  }
}
</script>

<style>
html{
  background: #11022C;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #FFF538;
  filter: drop-shadow(16px 16px 16px #8C860C);
  margin-top: 60px;
}
</style>
