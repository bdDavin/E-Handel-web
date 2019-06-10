<template>
  <div>
    <product-grid></product-grid>
  </div>
</template>

<script>
import ProductGrid from './ProductGrid.vue'

export default {
  name: 'StoreContainer',
  data() {
    return {

    }
  },
  components: {
    ProductGrid
  }
}
</script>

<style scoped>

</style>
