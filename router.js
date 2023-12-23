import Vue from 'vue';
import Router from 'vue-router';
import Impressum from './src/components/Impressum.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/impressum',
      name: 'Impressum',
      component: Impressum 
    },
  ],
});