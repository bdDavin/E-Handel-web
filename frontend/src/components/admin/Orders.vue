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

        <b-table-column field="use.first_name" label="First Name" sortable>
          {{ props.row.first_name }}
        </b-table-column>

        <b-table-column field="user.last_name" label="Last Name" sortable>
          {{ props.row.last_name }}
        </b-table-column>

        <b-table-column field="date" label="Date" sortable centered>
          <span class="tag is-success">
            {{ new Date(props.row.date).toLocaleDateString() }}
          </span>
        </b-table-column>

        <b-table-column label="Gender">
          <b-icon pack="fa"
            :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
          </b-icon>
            {{ props.row.gender }}
        </b-table-column>
      </template>

      <template slot="detail" slot-scope="props">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="/static/img/placeholder-128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ props.row.user.first_name }} {{ props.row.user.last_name }}</strong>
                <small>@{{ props.row.user.first_name }}</small>
                <small>31m</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </div>
          </div>
        </article>
      </template>
    </b-table>
  </section>
</template>

<script>

  export default {
    name: 'Orders',
    data() {
        return {
            data: [
                    { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                    { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                    { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                    { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                    { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
                ]
        }
    },
    methods: {
        toggle(row) {
            this.$refs.table.toggleDetails(row)
        }
    }
  }
</script>