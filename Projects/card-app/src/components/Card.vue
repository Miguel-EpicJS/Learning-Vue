<template>
  <div class="cards">
    <div class="card" v-for="card in cards" :key="card.desc">
      <img :src="card.thumb">
      <h1> {{card.desc}} </h1>
      <p> {{card.desc}} </p>
    </div>
    
  </div>
  <button @create-card="add()">Hi</button>
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
          thumb: "https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png"
        },
        {
          title: "Bla",
          desc: "Blabla",
          thumb: "https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png"
        },
      ]
    }
  },
  methods: {
    add(){
      alert("hi")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards{
  display: flex;
  flex-wrap: wrap;
  margin: auto 50px;
  justify-content: space-around;
}
.card{
  flex-basis: 20%;
  margin: 50px 10px;
  padding: 30px;
  background: #ddd;
  border-radius: 50px;
}
.card img{
  width: 100px;
  height: auto;
}
</style>
