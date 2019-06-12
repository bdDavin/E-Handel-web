<template>
    <div class="cart">
        <form  v-if="$store.state.cart.length > 0" action="">
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
        <h1 v-else class="is-4">Cart is empty</h1>
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

