<template>
  <section>
    <b-table
      :data="data"
      ref="table"
      paginated
      per-page="10"
      detailed
      detail-key="id"
      :show-detail-icon="true"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page">

      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>
          {{ props.row.id }}
        </b-table-column>

        <b-table-column field="first_name" label="First Name" sortable>
          {{ props.row.fName }}
        </b-table-column>

        <b-table-column field="last_name" label="Last Name" sortable>
          {{ props.row.lName }}
        </b-table-column>

        <b-table-column field="email" label="Email" sortable>
          {{ props.row.mail }}
        </b-table-column>

        <b-table-column field="phone" label="Phone" sortable>
          {{ props.row.phone }}
        </b-table-column>

        <b-table-column field="address" label="Address" sortable>
          {{ props.row.address }} {{ props.row.zipCode }} {{ props.row.city }}
        </b-table-column>

        <b-table-column field="country" label="Country" sortable>
          {{ props.row.country }}
        </b-table-column>

        <!--<b-table-column field="date" label="Date" sortable centered>
          <span class="tag is-success">
            {{ new Date(props.row.date).toLocaleDateString() }}
          </span>
        </b-table-column>-->
      </template>

      <template slot="detail" slot-scope="props">
        <article class="media" v-for="product in props.row.products" :key="product.productId">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="product.image">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ product.name }}</strong>
                <br>
                {{ product.desc }}
              </p>
            </div>
          </div>
          <div class="media-right">
            <strong>Id: {{ product.id }}</strong>
            <br>
            <strong>Quantity: {{ product.quantity }}</strong>
            <br>
            <strong>Price: ${{ product.price }}</strong>
          </div>
        </article>
      </template>
    </b-table>
  </section>
</template>

<script>

  export default {
    name: 'Orders',
    created() {
      this.getOrders()
    },
    computed: {
      
    },
    data() {
        return {
            data: []
        }
    },
    methods: {
      getOrders() {
        fetch('http://localhost:5000/api/orders')
        .then(response => response.json())
        .then(result => {          
          this.data = result
          console.log(this.data)
          
        }).catch(error => {
            console.log(error.message)
        })
      }
    }
  }
</script>

<style scoped>


</style>