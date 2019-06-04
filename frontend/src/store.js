/*jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    cart: [
        { 'price': 200, 'productName': 'Horse', 'quantity': 1},
        { 'price': 40, 'productName': 'Dog', 'quantity': 1 },
        { 'price': 600, 'productName': 'Elephant', 'quantity': 3},
        { 'price': 45, 'productName': 'Tiger', 'quantity': 1},
        { 'price': 59, 'productName': 'Snowman', 'quantity': 2},
    ],
  },
  mutations: {

  },
  actions: {

  },
});
