<template>
  <div class="foot">
      <nav class="level is-mobile">
        <h1 class="level-item has-text-centered ">
          ©Yardsale Corporation
        </h1>
        <p class="level-item has-text-centered">
          No refunds
        </p>
        <a href="mailto:friends@yardsale.com" class="level-item has-text-centered">
          <p>
            Contact us
          </p>
        </a>
      </nav>
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
.level {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  // justify-content: space-around;
}
.level-item {
  background-color: $primary-color;
  color: #D9D872;
  height: 100%;
  flex-shrink: 40;
  padding: 1em
}


</style>
 
