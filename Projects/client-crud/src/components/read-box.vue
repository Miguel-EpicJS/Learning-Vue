<template> 
    <div class="cards">
        <div style="display: none;">{{cliArray = clients}}</div>
        <div class="card" v-for="(cli, i) in cliArray" :key="cli.id">
            <h3> {{ cli.name }} </h3>
            <small> {{ cli.date }} </small>
            <p> {{ cli.desc }} </p>
            <delete-button @client-deleted="cliArray = $event" :ind="i" :clients="cliArray"></delete-button>
            <update-box :ind="i" :clients="cliArray" @update-client="cliArray = $event"></update-box>
        </div>
    </div>
</template>

<script>
import deleteButton from './delete-button.vue'
import updateBox from './update-box.vue'

export default {
    components: { deleteButton, updateBox },
    name: 'read-box',
    props: ['clients'],
    data(){
        return {
            cliArray: this.clients
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