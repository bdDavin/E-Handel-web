import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
Vue.use(VueRouter);

const NotFound = Vue.component('not-found', {
  template: '<h1>404</h1>'
})

const Home = Vue.component('not-found', {
  template: '<h1>Home</h1>'
})


export default new Vue.Router( {
  routes: [ {
      component: Home,
      path: '/'
      }, {
      component: HelloWorld,
      path: '/hello'
      },{
      component: NotFound,
      path: '/404' }, {
      redirect: '/404',
      path: '*'
   }  
  ]
});
