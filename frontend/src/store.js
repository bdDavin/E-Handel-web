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
    productFilter: {tab: 0, letter: 0},
    products: []
  },
  getters: {
    getProducts: state => {
      return state.products
    }
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    },
    setFilter(state, filter) {
      state.productFilter = filter
    }
  },
  actions: {
    setFilter(context, filter){
      context.commit('setFilter', filter)
      context.dispatch('getProductsFromDB')
    },
    getProductsFromDB(context){
      fetch('http://localhost:5000/api/products/'
      /*+context.state.productFilter.tab+'/'+context.state.productFilter.letter*/)
      .then(response => response.json())
      .then(result => {
        context.commit('setProducts', result)
      }).catch(error => {
          console.log(error.message)
      })
    }

  },
});
