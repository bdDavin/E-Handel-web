

<template>
  <div id="app">
    <TopBar></TopBar>
    
    <router-view></router-view> 
    <my-footer></my-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TopBar from './components/Navbar.vue';
import myFooter from './components/myFooter.vue';
import productGrid from './components/productGrid.vue';

export default {
  name: 'app',
  components: {
     HelloWorld,
    TopBar,
    myFooter,
    productGrid
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
