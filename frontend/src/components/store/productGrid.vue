<template>
  <div>
    <b-tabs @change="getProductsFromDB" position="is-centered" v-model="activeTab">
      <b-tab-item label="All">
      </b-tab-item>
      <b-tab-item label="Popular">
      </b-tab-item>
      <b-tab-item label="A-Z">
        <b-tabs @change="getProductsFromDB" :animated="false" position="is-centered" size="is-small" v-model="activeLetter">
          <b-tab-item label="A"></b-tab-item>
          <b-tab-item label="B"></b-tab-item>
          <b-tab-item label="C"></b-tab-item>
          <b-tab-item label="D"></b-tab-item>
          <b-tab-item label="E"></b-tab-item>
          <b-tab-item label="F"></b-tab-item>
          <b-tab-item label="G"></b-tab-item>
          <b-tab-item label="H"></b-tab-item>
          <b-tab-item label="I"></b-tab-item>
          <b-tab-item label="J"></b-tab-item>
          <b-tab-item label="K"></b-tab-item>
          <b-tab-item label="L"></b-tab-item>
          <b-tab-item label="M"></b-tab-item>
          <b-tab-item label="N"></b-tab-item>
          <b-tab-item label="O"></b-tab-item>
          <b-tab-item label="P"></b-tab-item>
          <b-tab-item label="Q"></b-tab-item>
          <b-tab-item label="R"></b-tab-item>
          <b-tab-item label="S"></b-tab-item>
          <b-tab-item label="T"></b-tab-item>
          <b-tab-item label="V"></b-tab-item>
          <b-tab-item label="W"></b-tab-item>
          <b-tab-item label="X"></b-tab-item>
          <b-tab-item label="Y"></b-tab-item>
          <b-tab-item label="Z"></b-tab-item>
        </b-tabs>
      </b-tab-item>
    </b-tabs>
    <section class="section">
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="product in productsToShow" :key="product.id">
          <product-card :product="product"></product-card>
        </div>
      </div>
      <b-pagination @change="pageChanged"
            :total="products.length"
            :current.sync="currentPage"
            order="is-centered"
            :per-page="productsPerPage"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">
        </b-pagination>
    </section>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductTest',
  created() {
    this.getProductsFromDB()
  },
  components: {
    ProductCard
  },
  data() {
    return {
      currentPage: 1,
      productsPerPage: 15,
      activeTab: 0,
      activeLetter: 0,
      products: [],
      productsToShow: []
    }
  },
  methods: {
    getProductsFromDB(){
      fetch('http://localhost:5000/api/products/?filter='+this.activeTab+'&letter='+this.activeLetter)
      .then(response => response.json())
      .then(result => {
        this.products = result
      }).catch(error => {
          console.log(error.message)
      })
    },
    pageChanged(payload) {
      let start = this.productsPerPage * (payload - 1)
      let end = this.productsPerPage * payload

      this.productsToShow = this.products.slice(start,end)
    }
  }
};
</script>

<style scoped>
.section {
  padding-top: 1em;
}
</style>
