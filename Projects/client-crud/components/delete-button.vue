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
            console.log('deleted')
        }
    }
}
</script>

<style>
    .btn{
        padding: 1rem;
        font-size: 1rem;
    }
</style>