<template>
  <div class="foot is-primary">
      <nav class="level is-mobile">
        <p class="level-item has-text-centered">
          Copyright © Yardsale Corporation, 2019. All rights reserved.
        </p>
        <a href="mailto:friends@yardsale.com" 
        class="level-item has-text-centered">
          <p>
            Contact us
          </p>
        </a>
      </nav>
      
  </div>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>

<style lang="scss" scoped>
$primary-color: #009975;

.foot {
  background-color: $primary-color;
  //color: #D9D872;
}
.level {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  // justify-content: space-around;
}
.level-item {
  background-color: $primary-color;
  color: #ffffff;
  height: 100%;
  flex-shrink: 40;
  padding: 1em
}
</style>
 
