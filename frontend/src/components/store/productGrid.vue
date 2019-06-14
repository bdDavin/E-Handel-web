<template>
  <div>
    <b-tabs @change="tabChanged" position="is-centered" v-model="activeTab">
      <b-tab-item label="All">
      </b-tab-item>
      <b-tab-item label="Popular">
      </b-tab-item>
      <b-tab-item label="A-Z">
        <b-tabs @change="tabChanged" :animated="false" position="is-centered" size="is-small" v-model="activeLetter">
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
          <b-tab-item label="U"></b-tab-item>
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
        <div class="column is-one-quarter" v-for="product in products" :key="product.id">
          <product-card ref="card" :product="product"></product-card>
        </div>
      </div>
      <b-pagination v-if="totalCount > productsPerPage" @change="pageChanged"
            :total="totalCount"
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
import anime from 'animejs';

export default {
  name: 'ProductGrid',
  created() {
    this.getProductsFromDB(1)
  },
  components: {
    ProductCard
  },
  data() {
    return {
      activeTab: 0,
      activeLetter: 0,
      currentPage: 1,
      productsPerPage: 15,
      products: [],
      totalCount: 0
    }
  },
  methods: {
    getProductsFromDB(payload){
      fetch('http://localhost:5000/api/products/?filter='+this.activeTab+'&letter='+this.activeLetter+'&page='+payload)
      .then(response => response.json())
      .then(result => {
        if (result.length === 0) {
          this.totalCount = 0
        }else {
          this.totalCount = result[0].full_count
        }
        this.products = result
      }).catch(error => {
          console.log(error.message)
      })
    },
    tabChanged() {
      this.currentPage = 1
      
      this.getProductsFromDB(this.currentPage)
    },
    pageChanged(payload) {
      this.getProductsFromDB(payload)
      //Scroll to top of grid
      window.scrollTo(0, 90)
      //this.animateProducts()
    },
    animateProducts() {
        let pArray = this.$refs.card
        let divArray = []
        pArray.forEach(p => {
            divArray.push(p.$el)
        });
        anime({
        targets: divArray,
        rotateY: 360,
        duration: 500,
        easing: 'linear',
        });
    }
  }
};
</script>

<style scoped>
.section {
  padding-top: 1em;
}
</style>