<template> 
    <div class="cards">
        <div class="card" v-for="(cli, i) in cliArray" :key="cli.id">
            <h3> {{ cli.name }} </h3>
            <small> {{ cli.date }} </small>
            <p> {{ cli.desc }} </p>
            <delete-button @client-deleted="cliArray = $event" :ind="i" :clients="cliArray">Delete</delete-button>
        </div>
    </div>
</template>

<script>
import deleteButton from './delete-button.vue'

export default {
  components: { deleteButton },
    name: 'read-box',
    props: ['clients'],
    data(){
        let cliArray = this.clients
        return {
            cliArray,
        }
    },
}
</script>

<style>
.card{
    border: 2px solid black;
    width: 30%;
    margin: 50px auto;
    padding: 50px;
    word-wrap: break-word;
}
.card h3{
    font-size: 2rem;
}
</style>