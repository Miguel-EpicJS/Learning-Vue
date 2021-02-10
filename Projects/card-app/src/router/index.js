import {createRouter, createWebHistory} from 'vue-router'
import CardForm from '../components/CardForm.vue'
import Card from '../components/Card.vue'


const routes = [
  { path: '/', component: CardForm },
  { path: '/card', component: Card },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router