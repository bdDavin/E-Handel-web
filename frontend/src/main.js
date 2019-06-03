import Vue from 'vue';
import App from './App.vue';
import store from './store';

new Vue({
  data: {
    horse: 'horse'
  },
  store,
  render: h => h(App),
}).$mount('#app');
