<template>
    <div>
        <form @submit.prevent="submit" class="form">
            <input v-model="title" class="field-name" placeholder="Put the name here">
            <input v-model="desc" class="field-desc" placeholder="Put the description here">
            <input v-model="thumb" class="field-thumb" placeholder="Put the thumb link here">
            <button @click="add()" class="button" type="submit">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "CardForm",
    data(){
      return{
        title: "",
        desc: "",
        thumb: ""
      }
    },
    methods:{
      add(){
        const obj = {title: this.title, desc: this.desc, thumb: this.thumb}
        const cards = require("../cards.json")
        cards.cards.push(obj)
      }
    }
}
</script>

<style scoped>
.form {
  display: grid;
  grid-row-gap: 5px;
  margin: 100px auto;
}

@media (min-width: 29.375rem) {
  .form {
    grid-column-gap: 25px;
    grid-template-areas: 
      "field-name  field-desc"
      "field-thumb ."
      "button      .";
  }
}

@media (min-width: 29.375rem) {
  .field-name {
    grid-area: field-name;
  }
  .field-desc {
    grid-area: field-desc;
  }
  .field-thumb {
    grid-area: field-thumb;
  }
  .button {
    grid-area: button;
  }
}

.form {
  background-color: #eee;
  font-family: Helvetica, Arial, sans-serif;
  max-width: 600px;
  padding: 25px;
}

.field {
  border: 1px solid #ccc;
  font-family: inherit;
  font-size: 1rem;
  padding: 10px;
}

.button {
  appearance: none;
  background-color: orange;
  border: none;
  font-size: .9375rem;
  margin-top: 20px;
  padding: 10px;
  justify-self: start;
}

</style>