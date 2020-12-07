<template>
  <form @submit.prevent="create">
    <label for="title-box">Type the name of Client</label>
    <input v-model="data.nameBox" type="text" id="title-box">
    <label for="date-box">Select delivery date</label>
    <input v-model="data.dateBox" type="date">
    <label for="desc-box">Description for the Client</label>
    <textarea v-model="data.descBox" id="desc-box" cols="30" rows="10"></textarea>
    <button type="submit">Create</button>
  </form>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'create-box',  
  setup(){
    const data = reactive({
      nameBox: '',
      dateBox: '',
      descBox: '',
      clients: [],
    })

    function create(){
      data.clients.push({name: data.nameBox, date: data.dateBox, desc: data.descBox})
      console.log(data.clients)
    }

    return{
      data,
      create,
    }
  }
}

</script>

<style scoped>
*{
  font-size: 1.3rem;
}
form{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}
form label{
  margin: 20px;
}
button{
  margin-top: 20px;
}
</style>