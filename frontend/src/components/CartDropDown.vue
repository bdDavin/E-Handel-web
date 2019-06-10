<template>
    <div class="cart">
        <!-- <b-dropdown> -->
        <b-dropdown-item aria-role="menu-item" custom paddingless>
            <form action="">
                <div class="modal-card" style="width:300px;">
                    <section class="modal-card-body">
                        <cart-table ></cart-table>
                    </section>
                    <footer class="modal-card-foot">
                        <!-- <button class="button is-primary"> -->
                            <router-link to="/checkout" class="is-button button is-fullwidth">
                                Checkout
                            </router-link>
                        <!-- </button> -->
                    </footer>
                </div>
            </form>
        </b-dropdown-item>
        <!-- </b-dropdown> -->
    </div>
</template>

<script>
import CartTable from './CartTable.vue';
export default {
  name: 'Navbar',
  components: {
      CartTable
  },
  props: {
  },
  methods: {
      
  },
  data: function () {
    return {
      
    }
  }
};
</script>

<style lang="scss" scoped>
    
</style>

