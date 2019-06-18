<template>
  <admin-consol v-if="$store.state.loggedIn"></admin-consol>
  <password v-else></password>
</template>

<script>
import Password from './Password.vue'
import AdminConsol from './AdminConsol.vue'

export default {
  name: 'AdminContainer',
  data() {
    return {

    }
  },
  components: {
    Password,
    AdminConsol
  }
}
</script>

<style scoped>

</style>