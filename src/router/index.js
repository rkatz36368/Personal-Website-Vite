import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AboutMe from '../components/AboutMe.vue'
import ContactMe from '../components/ContactMe.vue'
import Projects from '../components/Projects.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/AboutMe',
        name: 'AboutMe',
        component: AboutMe,
    },
    {
        path: '/ContactMe',
        name: 'ContactMe',
        component: ContactMe,
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: Projects,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
