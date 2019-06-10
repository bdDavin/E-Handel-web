
<template>

  <div id="app">
    <div class="container is-fluid">
     <div class="columns">
        <div class="column is-half is-gapless">
          <figure>
            <img src='../../assets/dartboard1.jpeg' >
          </figure>
        </div>
        <div class="column is-half is-gapless">
          <div class="product-info">
            <h1 class='is-size-1'><strong> {{ product }} </strong> </h1>
            <p class="is-size-3">{{ description }}</p>
            <p class="is-size-3"> {{ price }}</p>
           </div>
            <b-button class="is-size-3" v-on:click="addToCart">Add to Cart</b-button>
       </div>
     </div>
      <div class="columns">
        <div class="column is-full">
          
        </div>
       </div>
     </div>
  </div>
</template>



<script>
export default {
  name: 'ProductContainer',
  data() {
    return {
      product: 'Dartboard set',
      image: '../../assets/dartboard1.jpeg',
      price: '$499',
      description: 'hej'
    }
  },
  methods: {
    clickMe() {

    }
  }
};


</script>

<style scoped>


</style>
