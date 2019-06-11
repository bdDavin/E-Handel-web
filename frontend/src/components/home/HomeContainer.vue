<template>
  <div>
    <section class="hero is-large has-bg-img"> 
      <div class="hero-body">
        <h1 class="is-title is-large">
            Welcome!
          </h1> 
        <div class="container has-text-centered">
          <button ref="rButton" class="button is-large is-button is-one-fifth" @click="randomTapped">
            Generate!
          </button>
        </div> 
      </div>
    </section>
    <div  class="container"> 
      <br>
      <b-carousel ref="grid">
      </b-carousel>
    </div>

  </div>
</template>

<script>
import bCarousel from './CarouselComponent.vue';
import anime from 'animejs';



export default {
  name: 'HomeContainer',
  components: {
    bCarousel
  },
  data() {
    return {
      randomProduct: null
    }
  },
  mounted() {
      this.getRandomProductsFromDB()

      async function delay(delayInms) {
      return new Promise(resolve  => {
        setTimeout(() => {
          resolve(2);
        }, delayInms);
      });
    } 
    let that = this
    async function delayFunction() {
      let delayres = await delay(3000);
      
      let rButton = that.$refs.rButton
      
      anime({
        targets: rButton,
        scale: 1.2,
        loop: true,
        duration: 2000,
        easing: 'linear',
        direction: 'alternate',
      });
    }
    delayFunction();     
  },

  methods: {
    randomTapped() {
      let destination = '/product/'+this.randomProduct.id
      console.log(destination);
      
      this.$router.push(destination)
    },
    getRandomProductsFromDB(){
      fetch('http://localhost:5000/api/randomProduct')
      .then(response => response.json())
      .then(result => {
        this.randomProduct = result
      }).catch(error => {
          console.log(error.message)
      })
    },
    
    
  }
}
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
    width: 20%;
  }

  .button.is-large {

    font-size: 1.5rem;

}
</style>
