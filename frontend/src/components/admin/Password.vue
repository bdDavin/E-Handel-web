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
        pass: ""
    }
  },
  methods: {
    wronPassword() 
    {
      this.$notification.open({
          duration: 5000,
          message: `Wrong Password`,
          position: 'is-bottom-right',
          type: 'is-danger',
          hasIcon: true
      })
    },
    correctPassword() 
    {
      this.$notification.open({
          duration: 5000,
          message: `Welcome!`,
          position: 'is-bottom-right',
          type: 'is-success',
          hasIcon: true
      })
    },
    login() {
        fetch('http://localhost:5000/api/admin/?pw='+this.pass)
        .then(response => response.json())
        .then(result => {
            if (result) {
                this.$store.commit('setLoggedIn')
                this.correctPassword()
            } else {
                //Wrong pass
                this.wronPassword()
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