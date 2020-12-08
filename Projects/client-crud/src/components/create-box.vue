<template>
  <form @submit.prevent="create">
    <label for="title-box">Type the name of Client</label>
    <input v-model="nameBox" type="text" id="title-box">
    <label for="date-box">Select delivery date</label>
    <input v-model="dateBox" type="date">
    <label for="desc-box">Description for the Client</label>
    <textarea v-model="descBox" id="desc-box" cols="30" rows="10"></textarea>
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  name: 'create-box',
  data(){
    let nameBox = '';
    let dateBox = '';
    let descBox = '';
    let clients = [];
    return {nameBox, dateBox, descBox, clients}
  },
  methods:{

    create(){
      this.clients.push({id: Date.now, name: this.nameBox, date: this.dateBox, desc: this.descBox})
      this.$emit('sending-data', this.clients)
    }
  }
}

</script>

<style >

</style>