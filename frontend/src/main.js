import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
