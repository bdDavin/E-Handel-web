<template>
  <div class="container">
    <b-field label="Password">
        <b-input type="password" v-model="pass"></b-input>
    </b-field>
    <b-button class="is-button" @click="login">Login</b-button>
  </div>
</template>

<script>

export default {
  name: 'Password',
  data() {
    return {
        pass: null
    }
  },
  methods: {
    login() {
        fetch('http://localhost:5000/api/admin/?pw='+pass)
        .then(response => response.json())
        .then(result => {
            if (result) {
                $store.commit('setLoggedIn')
            } else {
                //Wrong pass
            }
        }).catch(error => {
            console.log(error.message)
        })
    }
  }
}
</script>

<style scoped>
.container {
    padding-top: 5em;
    width: 20em;
}

</style>