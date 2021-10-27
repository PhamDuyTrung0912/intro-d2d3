/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './routers';
import utils from './utils';

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(utils);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router  
  }).$mount('#app')
  
