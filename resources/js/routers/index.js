import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
    },
    {
        path: '/contact',
        component: Contact,
        name: 'contact',
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;