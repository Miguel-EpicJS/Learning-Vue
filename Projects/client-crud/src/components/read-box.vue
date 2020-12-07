<template> 
    <div class="cards">
        <div class="card" v-for="cli in clients" :key="cli.id">
            <h3> {{ cli.name }} </h3>
            <small> {{ cli.date }} </small>
            <p> {{ cli.desc }} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'read-box',
    props: ['clients'],
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