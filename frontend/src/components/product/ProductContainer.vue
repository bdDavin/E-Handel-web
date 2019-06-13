
<template>
    <div class="container is-fluid">
     <div class="columns">
        <div class="image-column column">
          <figure class="image is-4by3" >
            <img id="image" :src="productImage" alt="Placeholder image">
          </figure>
        </div>
        <div class="product-info column">
            <h1 class='is-size-1'><strong> {{ product.name }} </strong> </h1>
            <p class="is-size-3">Price: ${{ product.price }}</p>
            <b-button class="is-size-3 is-button" v-on:click="addToCart">Add to Cart</b-button>
       </div>
     </div>
     <div class="columns">
       <div class="column">
         <h2 class="is-size-3"> <strong> Description </strong> </h2>
         <p class="description is-size-4 "> {{ product.description }} </p>
       </div>
     </div>
      <div class="container is-fluid">
        <h2> <strong> YOU MIGHT ALSO LIKE </strong> </h2>
           <div class="column is-one-quarter">
           <product-slider></product-slider>
        </div>
      </div>
    </div>
</template>

<script>

import ProductSlider from '../home/CarouselComponent.vue'

export default {
  name: 'ProductContainer',
  created() {
    this.getProduct()
  },
  data() {
    return {
      product: {},
    }
  },
  computed: {
    productImage() {
      return 'src/assets/products/' +this.product.id +'.png'
    }
  },
  components: {
    ProductSlider
  },
  methods: {
    addToCart() {
      this.$store.commit('updateCart', this.product)
    },
    getProduct() {
      let id = this.$route.params.id
      fetch('http://localhost:5000/api/product/'+id)
      .then(response => response.json())
      .then(result => {
        if (result.length === 1) {
          this.product = result[0]
        } else {
          this.$router.replace('/404')
        }
      }).catch(error => {
          console.log(error.message)
      })
    },
  }
}
</script>

<style scoped>

.product-info {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  margin: 20;
}
.description {
  text-align: start;
}

#image {
  border-radius: 5px;
}
</style>