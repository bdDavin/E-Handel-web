import Vue from 'vue';
import App from './App.vue';
import store from './store';
//router wont work
// import router from './router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';



new Vue({
  data: {
    horse: 'horse'
  },
  store,
  // router,
  render: h => h(App),
}).$mount('#app');
