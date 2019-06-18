<template>
    <div>
        <b-table :data="data" :columns="columns"
            :striped="false" :hoverable="true" :checkable="false"
            class="has-text-center">
            <!-- row template -->
            <template slot-scope="props">
                <b-table-column center field="remove" label="" width="40" numeric>
                    <a @click="$store.commit('removeItem', props.row)">
                <b-icon
                    pack="fas"
                    icon="trash"
                    type="is-black"
                    >
                </b-icon>
                </a>
                </b-table-column>
                <b-table-column field="name" center label="Product">
                    <router-link :to="'/product/'+props.row.id">
                        <figure class="image is-64x64">
                            <img id="image" :src="props.row.image" alt="image">
                        </figure>
                        {{ props.row.name }}
                    </router-link>
                </b-table-column>
                <b-table-column field="quantity" center width="100" label="Quantity">
                    <a @click="$store.commit('decreseItemInCart', props.row)">
                        <b-icon
                            pack="fas"
                            icon="minus-square"
                            >
                        </b-icon>
                    </a>
                    {{ props.row.quantity }}
                    <a @click="$store.commit('updateCart', props.row)">
                        <b-icon
                            pack="fas"
                            icon="plus-square"
                            >
                        </b-icon>
                    </a>
                </b-table-column>
                <b-table-column field="price" label="Price" width="40" numeric>
                    {{ props.row.price * props.row.quantity }}
                </b-table-column>
            </template>
        </b-table>
        <div slot="footer" class="is-fullwidth">
            <div class="has-text-weight-bold is-fullwidth">
                 <div class="has-text-center is-fullwidth is-centered">
                     Total &nbsp; &nbsp; &nbsp; ${{totalCartPrice}} &nbsp;
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                demoImage: 'src/assets/products/1.png',
                data: this.$store.state.cart,
                 columns: [
                 ]
            }
        },
        computed: {
            totalCartPrice: function() {
                let tot = 0
                this.$store.state.cart.forEach(product => {
                    tot += product.price * product.quantity
                });
                return tot;
            }
        },
        methods: {
        }
    }
</script>

<style>
    #image {
        object-fit: cover;
    }
</style>
