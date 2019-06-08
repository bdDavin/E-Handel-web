<template>
  <div>
    <section class="section">
      <div class="container is-fluid">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="product in $store.state.products" :key="product.id">
            <product-card :product="product"></product-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductGrid',
  components: {
    ProductCard
  },
  data() {
    return {  
      //products: [{id: 412, name: "Elefant", price:"2414"},{id: 413, name: "Elefant", price:"2414"},{id: 124, name: "Elefant", price:"2414"},{id: 654, name: "Elefant", price:"2414"},{id: 754, name: "Elefant", price:"2414"},{id: 1527, name: "Elefant", price:"2414"},{id: 742, name: "Elefant", price:"2414"},{id: 333, name: "Elefant", price:"2414"}]
    }
  }
};
</script>

<style scoped>
  
</style>
