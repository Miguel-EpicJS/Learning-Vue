<template>
  <div class="cards">
    <div class="card" v-for="card in cards" :key="card.desc">
      <!-- <img> here -->
      <h1> {{card.desc}} </h1>
      <p> {{card.desc}} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data(){
    return {
      cards: [
        {
          title: "Bla",
          desc: "Blabla",
          thumb: "url here"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
