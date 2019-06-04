/*jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {
      type: Array,
      default: [
        {name:'Pinguin', price: 60},
        {name:'Pinguin', price: 60},
        {name:'Pinguin', price: 60},
        {name:'Pinguin', price: 60},
      ]
    }
  },
  mutations: {

  },
  actions: {

  },
});
