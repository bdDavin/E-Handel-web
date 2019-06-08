



<template>
  <div id="app" class="is-backround">
    <div class="pageContentWrapper">
        <TopBar></TopBar>
        <br>
        <br>
        <router-view></router-view>
    </div>
    <my-footer class="myFooter"></my-footer>
  </div>
</template>



<script>
import './style.scss';
import TopBar from './components/Navbar.vue';
import myFooter from './components/MyFooter.vue';
import tot from './components/HelloWorld.vue';

export default {
  created: function () {
    this.$store.dispatch('getProductsFromDB')
  },
  name: 'app',
  components: {
    TopBar,
    myFooter, tot
  },
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #D9D872;
  margin-top: 60px;
  /* TODO: Change to $color-backround */
  /* background-color: #454d66;  */
  background-color: #D9D872;

  /*position:fixed;*/
    padding:0;
    margin:0;
    margin-top: 3em;

    top:0;
    left:0;

    width: 100%;
    height: 100%;
}


/* Fixes the footer to the bottom */
html{
  position:relative; 
  min-height: 100%;
}
/* Normalize html and body elements,this style is just good to have */
html,body{
  margin:0;
  padding:0;
}
.pageContentWrapper{
  margin-bottom: 80px;/* Height of footer*/
} 
.myFooter{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
}

</style>




  
