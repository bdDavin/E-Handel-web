



<template>
  <div id="app" class="is-background">
    <TopBar></TopBar>
    <br>
    <router-view></router-view>
    <my-footer class="fixed-bottom"></my-footer>
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
  /* TODO: Change to $color-backround */
  /*background-color: #454d66; */

  /*position:fixed;*/
    padding:0;
    margin:0;
    margin-top: 3em;

    top:0;
    left:0;

    width: 100%;
    height: 100%;
}

my-footer {
  
}
</style>




  
