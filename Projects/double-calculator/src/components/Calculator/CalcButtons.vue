<template>
  <div class="calc-row">
      <button @click="submitOperation('/')" class="button-calc">&divide;</button>
      <button @click="submitOperation('*')" class="button-calc">*</button>
      <button @click="submitOperation('-')" class="button-calc">-</button>
      <button @click="submitOperation('+')" class="button-calc">+</button><br>
      <button @click="submitOperation('=')" class="button-calc">=</button>
      <button @click="submitOperation('CE')" class="button-calc">CE</button>
  </div>
</template>

<script>
export default {
    name: 'calc-buttons',
    emits: ['calc-operation'],
    methods:{
        submitOperation(op){
            this.$emit('calc-operation', op)
        }
    }
}
</script>

<style scoped>
.button-calc{
    width: 100px;
    height:100px;
    border-radius: 50%;
    font-size: 3rem;
    background: #6000af;
    color: white;
    border: 5px solid black;
    transition: all 500ms;
    cursor: pointer;
}
.button-calc:hover{  
    background: transparent;
}
</style>