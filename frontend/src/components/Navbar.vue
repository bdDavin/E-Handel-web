<template>
    <!-- <div class="hero is-primary">
        <div class="hero-body">
            <div class="container">
               
                
            </div>
        </div>
    </div> -->

  <div>
    <nav class="navbar is-fixed-top is-transparent is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <!-- <img class="is-white" src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
          <!-- <img class="is-white" src="../assets/logo.jpeg" width="112" height="28"> -->
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
        <!-- Dropdown kundvagn -->
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-white">
                My stuff
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
