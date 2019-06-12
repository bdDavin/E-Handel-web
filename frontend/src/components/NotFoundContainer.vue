<template>
  <div>
    <div class="container" ref="notFound">
      <h1 id="hej" class="title is-1 item">Page not found</h1>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
export default {
  created() {
    // let elements = document.querySelectorAll('#hej');
    // let a = this.$refs.notFound
    // anime({
    //     targets: el.querySelectorAll('.item'),
    //     rotate: '4turn',
    //     duration: 3000
    //   });
  },
  name: 'NotFoundContainer'
};
</script>

<style scoped>

</style>
