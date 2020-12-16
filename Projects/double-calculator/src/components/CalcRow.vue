<template>
  <div class="row">
      <number-button @emit-value="emitValue($event)" v-bind:number="parseInt(value)"></number-button>
      <number-button @emit-value="emitValue($event)" v-bind:number="parseInt(value)+1"></number-button>
      <number-button @emit-value="emitValue($event)" v-bind:number="parseInt(value)+2"></number-button>
  </div>
</template>

<script>
import NumberButton from './NumberButton.vue'
export default {
    name: 'calc-row',
    props: ['value'],
    emits: ['emit-row-value'],
    components: {
        'number-button': NumberButton
    },
    methods:{
        emitValue(value){
            this.$emit('emit-row-value', value)
        }
    }
}
</script>

<style>

</style>