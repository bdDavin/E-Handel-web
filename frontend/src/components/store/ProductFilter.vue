<template>
  <div>
    <b-tabs @change="onChange" position="is-centered" v-model="activeTab">
      <b-tab-item label="All">
      </b-tab-item>
      <b-tab-item label="Popular">
      </b-tab-item>
      <b-tab-item label="A-Z">
        <b-tabs @change="onChange" :animated="false" position="is-centered" size="is-small" v-model="activeLetter">
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
  </div>
</template>

<script>
import ProductGrid from './ProductGrid.vue'

export default {
  components: {
    ProductGrid,
  },
  name: 'ProductFilter',
  data() {
    return {
      activeTab: 0,
      activeLetter: 0,
      products: [],
      false: false
    }
  },
  methods: {
    onChange() {
      this.$store.dispatch('setFilter', {tab: this.activeTab, letter: this.activeLetter})
    }
  }
};
</script>

<style scoped>
  
</style>
