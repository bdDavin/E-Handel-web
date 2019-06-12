<template>
  <div>
    <section ref="banner" class="hero is-large has-bg-img"> 
      <div class="hero-body"> 
        <div class="container has-text-centered">
          <a class="button is-button is-large" ref="rButton" @click="randomTapped">Get Product!</a>
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




//delay
async function delay(delayInms) {
  return new Promise(resolve  => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
} 

//call this
async function delayFunction(f, delayTime) {
  let delayres = await delay(delayTime);
  f()
}

export default {
  name: 'HomeContainer',
  components: {
    bCarousel
  },
  data() {
    return {
      randomProduct: null,
      breathAnimation: null
    }
  },
  mounted() {
    this.getRandomProductsFromDB()
    delayFunction(this.startAnimate, 1000);   
    
  },
  data() {
    return {
      breathe: true
    }
  },
  methods: {
    startAnimate() {
      let rButton = this.$refs.rButton
      let banner = this.$refs.banner
      
      this.breathAnimation = anime({
        targets: rButton,
        scale: 1.2,
        loop: this.breathe,
        duration: 2000,
        easing: 'linear',
        direction: 'alternate',
      });
    },
    randomTapped() {
      let destination = '/product/'+this.randomProduct.id
      
      this.breathAnimation.pause()

      //animate
      let rButton = this.$refs.rButton
      let banner = this.$refs.banner
      
      anime({
        targets: rButton,
        height: {value: banner.clientHeight, delay: 500, duration:500},
        width: {value: banner.clientWidth, duration:500},
        background: {value: '#FFF', duration:500},
        duration: 1000,
        easing: 'linear',
      })
      

      //browse product
      delayFunction(()=> {
        this.$router.push(destination)
      }, 1000)
      
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
