import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import { routes } from './routes';
import store from './store/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
