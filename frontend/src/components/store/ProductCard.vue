<template>
  <div class="card">
    <router-link :to="productId">
      <div class="card-image">
        <figure class="image is-4by3">
          <img id="image" :src="productImage" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="level is-mobile">
          <p class="level-left">{{product.name}}</p>
          <P class="level-right">{{product.price}}$</P>
        </div>
      </div>
    </router-link>
    <div class="card-footer">
      <div class="card-footer-item">
        <a class="button is-button is-medium is-fullwidth" @click="addToCart">Add to cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    productId() {
      return '/product/'+this.product.id
    },
    productImage() {
      return 'src/assets/products/' +this.product.id +'.png'
    }
  },
  name: 'ProductCard',
  props: {
    product: {}
  }, 
  data() {
    return {
      
    }
  },
  methods: {
    addToCart() {
      console.log("added to cart "+ this.product.id)
      //TODO: Update cart in vue store
    }
  }
}
</script>

<style scoped>
  .rectangle{
    border-radius: 0;
  }
  .card{
    border-radius: 5px;
  }
  #image{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px
  }
</style>
