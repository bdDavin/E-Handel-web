<template>
  <div>
    <b-tabs position="is-centered" v-model="activeTab">
      <b-tab-item label="Add products">
        <add-product-form></add-product-form>
      </b-tab-item>
      <b-tab-item label="Orders">
        <orders></orders>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import Orders from './Orders.vue'
import AddProductForm from './AddProductForm.vue'

export default {
  name: 'AdminConsol',
  data() {
    return {
      activeTab: null
    }
  },
  components: {
    Orders,
    AddProductForm
  }
}
</script>

<style scoped>

</style>