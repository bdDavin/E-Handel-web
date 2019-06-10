import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import StoreContainer from './components/store/StoreContainer.vue';
import HomeContainer from './components/home/HomeContainer.vue';
import ProductContainer from './components/product/ProductContainer.vue';
import CheckoutContainer from './components/checkout/CheckoutContainer.vue';
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
      path: '/product/:id'
      }, {
      component: NotFoundContainer,
      path: '/404' 
      }, {
      redirect: '/404',
      path: '*'
      }
  ]
});
