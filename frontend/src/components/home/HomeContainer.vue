<template>
  <div>
    <section class="hero is-large has-bg-img"> 
      <div class="hero-body"> 
        <div class="container has-text-centered">
          <button class="button is-large is-button">
            Get your product today!
            </button>
        </div> 
      </div>
    </section>

    <b-carousel>
    </b-carousel>  

  </div>
</template>

<script>
import bCarousel from './CarouselComponent.vue';
export default {
  
  name: 'HomeContainer',
  components: {
    bCarousel
  }
};
</script>

<style scoped>
  .has-bg-img {
    background: url('../../assets/barn.jpg')center center;
    background-size:cover; 
    margin: 0;
    padding: 0;
  }

  button {
    height: 60%;
    width: 60%;
  }
</style>
