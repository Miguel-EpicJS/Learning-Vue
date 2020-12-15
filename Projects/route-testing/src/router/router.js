import { createWebHistory, createRouter} from 'vue-router'
import { Home } from '../components/Home.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        }
    ]
})

export default router