import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import axios from 'axios';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Buefy);

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
