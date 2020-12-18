<template>
  <div class="viewer">
      <h1>{{op}}</h1> = <h1>{{res}}</h1>
  </div>
</template>

<script>
export default {
    name: 'data-visualizer',
    props: ['op', 'res'],
}
</script>

<style>

</style>