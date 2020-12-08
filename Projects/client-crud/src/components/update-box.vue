<template>
    <div>
        <button class="btn" @click="view = !view">Update</button>
    </div>
    <form @submit.prevent="edit" v-if="view">
        <label for="title-box">Type the name of Client</label>
        <input v-model="nameBox" type="text" id="title-box">
        <label for="date-box">Select delivery date</label>
        <input v-model="dateBox" type="date">
        <label for="desc-box">Description for the Client</label>
        <textarea v-model="descBox" id="desc-box" cols="30" rows="10"></textarea>
        <button @click="edit" type="submit">Edit</button>
    </form>
</template>

<script>
export default {
    name: 'update-box',
    props: ['ind' ,'clients'],
    emits: ['update-client'],
    data(){
        let view = false;
        let nameBox = '';
        let dateBox = '';
        let descBox = '';
        return{
            view,
            nameBox,
            dateBox,
            descBox,
        }
    },
    methods: {
        edit(){
            let alter = this.clients
            alter[this.ind] = {id: Date.now, name: this.nameBox, date: this.dateBox, desc: this.descBox};
            this.$emit('update-client', alter);
        }
    }
}
</script>

<style scoped>
</style>