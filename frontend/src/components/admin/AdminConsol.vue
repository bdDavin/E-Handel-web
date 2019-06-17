<template>
  <div>
    <b-tabs position="is-centered" v-model="activeTab">
      <b-tab-item label="Orders">
        <orders></orders>
      </b-tab-item>
      <b-tab-item label="Add products">

      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import Orders from './Orders.vue'

export default {
  name: 'AdminConsol',
  data() {
    return {
      activeTab: null
    }
  },
  components: {
    Orders
  }
}
</script>

<style scoped>

</style>