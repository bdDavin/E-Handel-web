

<template>
  <div id="app">
    <TopBar></TopBar>
    <router-view></router-view> 
    <my-footer></my-footer>
  </div>
</template>

<script>
import TopBar from './components/Navbar.vue';
import myFooter from './components/MyFooter.vue';

export default {
  name: 'app',
  components: {
    TopBar,
    myFooter
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
