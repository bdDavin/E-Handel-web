
<template>
    <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <h1 class="title">Yardsale</h1>
            </router-link>

            <a @click="burgerTapped" role="button" class="navbar-burger burger" v-bind:class="{'is-active': burgerIsActive}" aria-label="menu" aria-expanded="false" data-target="navbar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbar" class="navbar-menu" v-bind:class="{'is-active': burgerIsActive}">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item">Home</router-link>
                <router-link to="/store" class="navbar-item">Store</router-link>
            </div>
            <div class="navbar-end">
                <div class="navbar-item" v-bind:class="{'is-active': cartIsActive}">
                    <a @click="cartTapped" ref="cart" class="button is-white navbar-link is-arrowless">
                        <b-icon v-if="!cartIsActive"
                            pack="fas"
                            icon="shopping-cart"
                            type="is-dark">
                        </b-icon>
                        <b-icon v-else
                            pack="fas"
                            icon="times"
                            type="is-dark">
                        </b-icon>
                    </a>
                    <div class="navbar-dropdown is-right">
                        <div v-if="$store.state.cart.length > 0 && cartIsActive" class="navbar-item">
                            <cart-table></cart-table>
                        </div>
                        <div v-if="$store.state.cart.length > 0 && cartIsActive" class="navbar-item">
                            <router-link to="/checkout" class="is-button button is-fullwidth">
                            Checkout
                            </router-link>
                        </div>
                        <div class="navbar-item">
                            <h1 v-if="$store.state.cart.length === 0" class="is-4">Cart is empty</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import CartTable from './CartTable.vue'
import anime from 'animejs';
export default {
  name: 'Navbar',
  computed: {
      cartItems() {
      return this.$store.state.cart.length
    },
  },
  watch: {
      $route (to, from){
          this.burgerTapped()
      },
      cartItems (newCount, oldCount) {
      this.bounceCart()
    }
  },
  components: {
    CartTable
  },
  data: function () {
    return {
        cartIsActive: false,
        burgerIsActive: false
    }
  },
  methods: {
    burgerTapped() {
        this.burgerIsActive = !this.burgerIsActive
        this.cartIsActive = false
    },
    cartTapped() {
        this.cartIsActive = !this.cartIsActive
    },
    bounceCart() {
        let cart = this.$refs.cart
        
        anime({
          targets: cart,
          translateY: [
            {value: -10},
          ],
          scale: 1.2,
          duration: 50,
          easing: 'linear',
          direction: 'alternate',
        });
      }
  }
};
</script>