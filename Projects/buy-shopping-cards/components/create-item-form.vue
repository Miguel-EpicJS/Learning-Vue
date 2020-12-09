<template>
    <div class="form-vertical">
        <form @submit.prevent="submitData">
            <label for="name-item">Name of the Item</label>
            <input v-model="nameItem" id="name-item" type="text">
            <label for="price-item">Price of the Item</label>
            <input v-model="priceItem" id="price-item" type="text">
            <label for="image-item">Image Url of the Item</label>
            <input v-model="imageItem" id="image-item" type="text">
            <label for="desc-item">Simple description of the Item</label>
            <textarea v-model="descItem" id="desc-item" cols="30" rows="10"></textarea>
            <button type="submit" class="btn">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'create-item-form',
    emits: ['receive'],
    data(){
        return{
            nameItem: '',
            priceItem: '',
            imageItem: '',
            descItem: '',
            allData: [],
        }
    },
    methods:{
        submitData(){
            let data = {id: Date.now, name: this.nameItem, price: this.priceItem, image: this.imageItem, desc: this.descItem, flip: false}
            this.allData.push(data)
            this.$emit('receive', this.allData);
        }
    }
}
</script>

<style>
.form-vertical form{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(26, 38, 63);
    font-size: 1.5rem;
}
.form-vertical form label, .form-vertical form input, form-vertical form textarea{
    margin: 10px;
}
.form-vertical form input, .form-vertical form textarea{
    font-size: 1.7rem;
}
</style>