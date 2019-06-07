



<template>
  <div id="app">
    <TopBar></TopBar>
    <br>
    <router-view></router-view>
    <br>
    <my-footer></my-footer>
  </div>
</template>



<script>
import './style.scss';
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
