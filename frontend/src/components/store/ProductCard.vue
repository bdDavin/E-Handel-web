<template>
  <div ref="card" @mouseover="hover(true)" @mouseleave="hover(false)" class="card">
    <router-link :to="productId">
      <div class="card-image">
        <figure class="image is-4by3">
          <img id="image" :src="product.image">
        </figure>
      </div>
      <div class="card-content">
        <div class=" is-mobile">
          <div class="level-item">
            <p class="level-left title is-6">{{product.name}}</p>
          </div>
          <div class="level-item">
            <P class="subtitle level-right">${{product.price}}</P>
          </div>
        </div>
      </div>
    </router-link>
    <div class="card-footer">
      <div v-if="buttonIsVisible" class="card-footer-item">
        <a class="button is-button is-medium is-fullwidth" @click="addToCart">Add to cart</a>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  computed: {
    productId() {
      return '/product/'+this.product.id
    },
    productImage() {
      return this.product.image
    },
  },
  name: 'ProductCard',
  props: {
    product: {},
    isHoverable: {
      type: Boolean,
      default: true,
    },
    buttonIsVisible: {
      type: Boolean,
      default: true,
    }
  }, 
  methods: {
    hover(hover) {
      if(!this.isHoverable) {
        return
      }
      let sc = 1
      if(hover) {sc = 1.05} 
      let card = this.$refs.card
      anime({
        targets: card,
        scale: sc,
        duration: 200,
      })
    },
    addToCart() {
      this.$store.commit('updateCart', this.product)
      let card = this.$refs.card

      anime({
        targets: card,
        scale: [
          { value: 0},
          { value: 1},
        ],
        duration: 300,
        easing: 'linear',
      })
    }
  }
}
</script>

<style scoped>
  .rectangle{
    border-radius: 0;
  }
  
  .column {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .card > a {
    flex-grow: 1;
  } 

  .level-left {
    flex-shrink: unset;
  }

  .card{
    border-radius: 5px;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #image{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    object-fit: cover;
  }
</style>
