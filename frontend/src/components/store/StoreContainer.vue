<template>
  <div>
    <product-filter></product-filter>
    <product-grid></product-grid>
  </div>
</template>

<script>
import ProductFilter from './ProductFilter.vue'
import ProductGrid from './ProductGrid.vue'

export default {
  name: 'StoreContainer',
  data() {
    return {

    }
  },
  components: {
    ProductFilter,
    ProductGrid
  }
}
</script>

<style scoped>

</style>
