<template>
  <button @click="del" class="btn">Delete</button>
</template>

<script>
export default {
    name: 'delete-btn',
    props: ['ind', 'clients'],
    methods: {
        del(){
            let alter = this.clients;
            alter.splice(this.ind, 1);
            this.$emit('client-deleted', alter);
        }
    }
}
</script>

<style>
    
</style>