<template>
  <div>
        <p><router-link to="/">Go to Home</router-link></p>
        <p><router-link to="/about">Go to About</router-link></p>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'CustomMenu',
}
</script>

<style>

</style>