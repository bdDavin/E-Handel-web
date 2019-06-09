<template>
    <div>
        <b-table :data="$store.state.cart" :columns="columns"
            :striped="true" :hoverable="true" :checkable="false"
            class="has-text-center"></b-table>
        <div slot="footer" class="is-fullwidth">
        
            <div class="has-text-weight-bold is-fullwidth">
                 <div class="has-text-center is-fullwidth is-centered">
                     Total &nbsp &nbsp &nbsp ${{totalCartPrice}} &nbsp 
                 </div>     
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        field: 'productName',
                        label: 'Product',  
                    },
                    {
                        field: 'quantity',
                        label: 'Quantity',
                        width: '80',
                        numeric: true
                    },
                    {
                        field: 'price',
                        label: 'Price',
                        width: '40',
                        numeric: true
                    }
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
        }
    }
</script>