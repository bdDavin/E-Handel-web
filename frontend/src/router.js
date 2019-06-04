import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HelloWorld from './components/HelloWorld.vue';
import productGrid from './components/productGrid.vue';
import StoreContainer from './components/StoreContainer.vue';
import HomeContainer from './components/HomeContainer.vue';
import ProductContainer from './components/ProductContainer.vue';
import CheckoutContainer from './components/CheckoutContainer.vue';
import NotFoundContainer from './components/NotFoundContainer.vue';

export default new VueRouter( {
  routes: [ {
      component: HomeContainer,
      path: '/'
      }, {
      component: StoreContainer,
      path: '/store'
      }, {
      component: CheckoutContainer,
      path: '/checkout'
      }, {
      component: ProductContainer,
      path: '/product/:productId?'
      }, {
      component: NotFoundContainer,
      path: '/404' }, {
      redirect: '/404',
      path: '*'
   }  
  ]
});
