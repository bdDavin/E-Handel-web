
<template>

  <!-- <div class="columns">

    <div class="column">
      <figure>
        <img src="E-Handel-web/frontend/src/assets/dartboard1.jpeg" >
      </figure>
    </div>

    <div class="column">

        <h1 class="is-size-5">Dartboard set</h1>
        <p class="is-size-4">$499</p>
          <section>
            <b-button @click="clickMe" size="is-medium">Add to Cart</b-button>
            <h1> he  </h1>
          </section>

      </div>

  </div> -->



<div id="app">

  <div class="container is-fluid">

  <div class="columns">

        <div class="column">
          <div class="product-image">
            <img src='../../assets/dartboard1.jpeg' >
          </div>
        </div>

        <div class="column">

          <div class="product-info">
            <h1 class='is-size-3rem'><strong> {{ product.name }} </strong> </h1>
            <p class="is-size-3rem"> {{ product.price }}</p>

          </div>
          <b-button v-on:click="addToCart">Add to Cart</b-button>

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