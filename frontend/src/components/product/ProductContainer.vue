
<template>

  <div id="app">
    <div class="container is-fluid">
     <div class="columns">
        <div class="column is-half is-gapless">
          <figure>
            <img id="image" :src="productImage" alt="Placeholder image">
          </figure>
        </div>
        <div class="column is-half is-gapless">
          <div class="product-info">
            <h1 class='is-size-1'><strong> {{ product.name }} </strong> </h1>
            <p class="is-size-4">{{ product.description }}</p>
            <p class="is-size-3"> ${{ product.price }}</p>
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
  created() {
    this.getProduct()
  },
  data() {
    return {
      product: {}
    }
  },
  computed: {
    productImage() {
      return 'src/assets/products/' +this.product.id +'.png'
    }
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
          this.$router.push('/404')
        }
      }).catch(error => {
          console.log(error.message)
      })
    }
  }
}
</script>

<style scoped>

</style>