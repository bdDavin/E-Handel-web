/*jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    cart: [
        // { 'price': 200, 'name': 'Horse', 'quantity': 1, 'id': 1},
        // { 'price': 40, 'name': 'Dog', 'quantity': 1, 'id': 2 },
        // { 'price': 600, 'name': 'Elephant', 'quantity': 3, 'id': 3},
        // { 'price': 45, 'name': 'Tiger', 'quantity': 1, 'id': 4},
        // { 'price': 59, 'name': 'Snowman', 'quantity': 2, 'id': 5},
    ],
    productFilter: {tab: 0, letter: 0},
    products: []
  },
  getters: {
    priceMultiplier() {
      //in procent
      let min = 80;

      // 100 = default
      let max = 150;

      let random = Math.random() * (+max - +min) + min;
      console.log(random);

      //return value between 0.8 and 2.5 ∞∞∞ 80 250
      return random / 100
    }
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    },
    setFilter(state, filter) {
      state.productFilter = filter
    },
    removeItem(state, product) {
      for (let i = 0; i < state.cart.length; i+=1) {
        if(product.id === state.cart[i].id) {
          state.cart.splice(i, 1)
          return
        }
      }
    },
    decreseItemInCart(state, product) {

      //add quantity if allready in cart
      for (let i = 0; i < state.cart.length; i+= 1) {
        const cartProduct = state.cart[i];

        if(cartProduct.id === product.id) {

          if(state.cart[i].quantity > 1) {

            state.cart[i].quantity -=  1//product.quantity

            //update cart
            state.cart.push({})
            state.cart.pop()
            return
          } else {
            this.commit('removeItem', product)
            return
          }
        }
      }
    },
    updateCart(state, product) {

      if(!product.quantity) {
        product.quantity = 1
      }

     //add quantity if allready in cart
      for (let i = 0; i < state.cart.length; i+= 1) {
        const cartProduct = state.cart[i];

        if(cartProduct.id === product.id) {

          state.cart[i].quantity +=  1//product.quantity

          //update cart
          state.cart.push({})
          state.cart.pop()
          return
        }
      }

      //add product
      state.cart.push(product)
    }
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

          //console.log(product);

          //set image
          //product.image = 'src/assets/products/' +product.id +'.png'
        });

        //set store products
        context.commit('setProducts', result)
      }).catch(error => {
          console.log(error.message)
      })
    }
  },
});
