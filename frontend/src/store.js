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
    ]
  },
  getters: {
    priceMultiplier() { 
      //in procent
      let min = 80; 

      // 100 = default

      let max = 250;  

      let random = Math.random() * (+max - +min) + min; 
      console.log(random);
      
      //return value between 0.8 and 2.5 ∞∞∞ 80 250
      return random / 100
    }
  },
  mutations: {
    
  },
  actions: {
    getProductsFromDB(context){
      fetch('http://localhost:5000/api/products/'
      /*+context.state.productFilter.tab+'/'+context.state.productFilter.letter*/)
      .then(response => response.json())
      .then(result => {
        
        //TODO: testing with price multiplier
        result.forEach(product => {
          let multiplier = context.getters.priceMultiplier
          product.price *= multiplier
          product.price /= 10
          product.price = Math.round(product.price)
          product.price *= 10
        });

        //set store products
        context.commit('setProducts', result)
      }).catch(error => {
          console.log(error.message)
      })
    }
  },
});
