import Vue from 'vue'
import VueRouter from 'vue-router'


import login from '../components/Login/login.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: login }
]



const router = new VueRouter({
routes, // short for `routes: routes`
mode: 'history'
})


export default router