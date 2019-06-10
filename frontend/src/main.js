import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';


import Buefy from 'buefy';

Vue.use(Buefy)


new Vue({
  data: {
    horse: 'horse',
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app');
