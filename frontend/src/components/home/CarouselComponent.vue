<template>
  <div ref="grid" class="contair">
    <div class="container is-fluide">
      <div class="columns is-mobile">
        <div class="column" v-for="product in products" :key="product.id">
          <product-card ref="product" :isHoverable="false" :product="product"></product-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../store/ProductCard.vue'
import anime from 'animejs';

export default {
  name: 'ProductSlider',
  created() {
    this.getProductsFromDB()  
  },
  mounted() {
      let startAnimation = this.startGridAnimation

      async function delay(delayInms) {
      return new Promise(resolve  => {
        setTimeout(() => {
          resolve(2);
        }, delayInms);
      });
    }
    async function delayFunction() {
      let delayres = await delay(1000);
      startAnimation()
    }
    delayFunction();     
  },
  components: {
    ProductCard
  },
  data() {
    return {
      activeTab: 0,
      activeLetter: 0,
      products: []
    }
  },
  methods: {
    getProductsFromDB(payload){
      fetch('http://localhost:5000/api/products/?filter=1')
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
    startGridAnimation() {
        let grid = this.$refs.grid
        let pArray = this.$refs.product
        let divArray = []

        pArray.forEach(p => {
            divArray.push(p.$el)
        });
        anime({
        targets: divArray,
        translateX: [
            { value: -1500},
            { value: 0},      
        ],
        loop: true,
        duration: 140000,
        autoplay: true,
        easing: 'linear',
        });
    }
  }
};
</script>

<style scoped>
  
</style>
