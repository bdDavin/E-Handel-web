



<template>
  <div id="app" class="is-backround">
    <div class="pageContentWrapper">
      <TopBar></TopBar>
      <section class=" is-fluid has-navbar-fixed-top">
        <router-view></router-view>
      </section>
    </div>
    <my-footer class="myFooter"></my-footer>
  </div>
</template>

<style lang="scss">
@import url('https://cdn.rawgit.com/octoshrimpy/bulma-o-steps/master/bulma-steps.css');
@import url('https://use.fontawesome.com/releases/v5.2.0/css/all.css');
@import url('https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css');
</style>


<script>
import './style.scss';
import TopBar from './components/TopBar.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  created: function () {
    this.$store.dispatch('getProductsFromDB')
  },
  name: 'app',
  components: {
    TopBar,
    MyFooter
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  
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
  background-color: white;
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

img {
  width:100%;
  height:100%;
  background: url(https://via.placeholder.com/400/ffffff
    ) no-repeat scroll 0 0;
  background-size:cover; 
  margin: 0;
  padding: 0;
}

</style>
