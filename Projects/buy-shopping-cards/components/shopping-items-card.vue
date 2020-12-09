<template>
    {{check()}}
    <div class="container">
        <div class="cards">
            <div class="flip-card" v-for="(item, ind) in listItems" :key="item.id" :class="{flipNow: item.flip}">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img :src="item.image" :alt="item.name">
                        <h3> {{item.name}} </h3>
                        <h5> {{item.price}} </h5>
                        <button class="btn" @click="change(item)">Flip</button>
                        <button class="btn" @click="del(ind)">Delete</button>
                    </div>
                    <div class="flip-card-back">
                        <h4>{{item.desc}}</h4>
                        <button class="btn" @click="change(item)">Flip</button>
                        <button class="btn" @click="del(ind)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'shopping-items-card',
    props: ['items'],
    data() {
        return{
            listItems: this.items,
            flip: false,
        }
    },
    methods: {
        check(){
            if(this.listItems != this.items){
                this.listItems = this.items;
            }
        },
        change(i){
            i.flip = !i.flip;
        },
        del(ind){
            this.listItems.splice(ind, 1);
        }
    }
}
</script>

<style scoped>
img{
    width: 150px;
    height: auto;
}
.cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.flip-card {
  background-color: transparent;
  width: 400px;
  height: 450px;
  perspective: 1000px;
  font-size: 2rem;
  margin: 50px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flipNow .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {   
  transform: rotateY(180deg);
}
</style>