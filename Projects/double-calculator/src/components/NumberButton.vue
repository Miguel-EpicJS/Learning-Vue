<template>
  <button @click="$emit('emit-value', number)" class="button-calc"> {{ number }} </button>
</template>

<script>
export default {
    name: 'button-calc',
    props: ['number'],
    emits: ['emit-value'],
}
</script>

<style scoped>
.button-calc{
    width: 100px;
    height:100px;
    border-radius: 50%;
    font-size: 3rem;
    background: transparent;
    border: 5px solid black;
    transition: all 500ms;
}
.button-calc:hover{  
    background: #6000af;
    color: white;
}
</style>