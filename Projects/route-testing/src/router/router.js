import { createWebHistory, createRouter} from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]
})

export default router