import Vue from 'vue'
import VueRouter from 'vue-router'


import login from '../components/Login/login.vue';
import signup from '../components/Login/signup.vue';
import logout from '../components/Login/logout.vue';
import forum from '../components/Forum/forum.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: login },
    { path: '/signup', component: signup },
    { path: '/logout', component: logout },
    { path: '/forum', component: forum , name: "forum"}
]



const router = new VueRouter({
routes, // short for `routes: routes`
mode: 'history'
})


export default router