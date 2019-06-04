

<template>
  <div>
    <nav class="navbar is-fixed-top is-transparent is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item navbar-center" href="#">
          <h1 class=" title is-1">
            Yardsale  
          </h1>
        </a>
        <a role="button" @click="burgerTapped" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <!-- links -->
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
          <router-link to="/store" class="navbar-item">
            Store
          </router-link>
          <router-link to="/checkout" class="navbar-item">
            temp-Checkout
          </router-link>
          <router-link to="/product/1" class="navbar-item">
            temp-Product
          </router-link>
        </div>

        <!-- Dropdown cart -->
        <div class="navbar-end">
          <div class="navbar-item">
            <b-dropdown position="is-bottom-left" aria-role="menu">
              <button class="button is-white" slot="trigger">
                <a class="button is-white">
                  <b-icon
                    pack="fas"
                    icon="shopping-cart"
                    type="is-dark">
                  </b-icon>
                </a>
              </button>
                <!-- cart component -->
              <cart-drop-down></cart-drop-down>
            </b-dropdown>
          </div>
        </div>
       <!-- Dropdown cart end -->
      </div>
    </nav>
  </div>
</template>


<script>
import CartDropDown from './CartDropDown.vue';
export default {
  name: 'Navbar',
  components: {
    CartDropDown
  },
  props: {
    msg: String,
  },
  methods: {
      burgerTapped() {
        // $(".navbar-burger").toggleClass("is-active");
        // $(".navbar-menu").toggleClass("is-active");
        this.isHamburgerActive = !this.isHamburgerActive
      }
  },
  data: function () {
    return {
      isHamburgerActive: false
    }
  }
};
</script>


<style scoped>

  .navbar-item.navbar-center {
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
  }
</style>
