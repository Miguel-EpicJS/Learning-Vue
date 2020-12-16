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
    width: 128px;
    height: 128px;
    border-radius: 50%;
}
</style>