<template>
  <admin-consol v-if="$store.state.loggedIn"></admin-consol>
  <password v-else></password>
</template>

<script>
import Password from './Password.vue'
import AdminConsol from './AdminConsol.vue'

export default {
  name: 'AdminContainer',
  components: {
    Password,
    AdminConsol
  }
}
</script>