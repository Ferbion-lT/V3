import Vue from 'vue';
import Router from 'vue-router';
import Home from './src/components/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home 
    },
  ],
});