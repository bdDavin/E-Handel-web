<template>
  <div class="foot">
      <div class="">
        <nav class="level">
          <h1 class="level-item has-text-centered">
            ©No single´s club
          </h1>
          <p class="level-item has-text-centered">
            Policy
          </p>
          <p class="level-item has-text-centered">
            No refund
          </p>
          <a href="mailto:someone@yoursite.com" class="level-item has-text-centered">
            <p>
              Contact us
            </p>
          </a>
        </nav>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$primary-color: #009975;

.foot {
  background-color: $primary-color;
  color: #D9D872;
}
.level-item {
  background-color: $primary-color;
  color: #D9D872;
}


</style>
 
