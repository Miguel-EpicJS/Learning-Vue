<template>
  <button class="button-calc"> {{ number }} </button>
</template>

<script>
export default {
    name: 'button-calc',
    props: ['number']
}
</script>

<style scoped>
.button-calc{
    width: 100px;
    height:100px;
    border-radius: 50%;
    font-size: 2rem;
    background: transparent;
    border: 5px solid black;
}
</style>