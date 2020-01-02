

require('./bootstrap');

window.Vue = require('vue');

import vuetify from './vuetify';

import User from './Helpers/User';
window.User = User;

window.EventBus = new Vue();

import AppHome from './components/AppHome.vue';
import router from './Router/router.js';



const app = new Vue({
    router,
    vuetify,
    render: h => h(AppHome),
    el: '#app',
});
