<template>
  <div class="slide">

  </div>
</template>
<script>
  export default {
    name: 'Slide'
  }
</script>
<style scoped>
  .slide {
    overflow: hidden;
    border-radius: 1.7rem;
  }

  #myCarousel {
    margin: .3rem;
    display: flex;
    flex: 1;
  }

  img {
    width: 100%;
    border: 1px solid #4eb6fe;
  }

  .carousel-caption {
    margin-bottom: -1rem;
  }

  .carousel-indicators {
    margin-bottom: -.5rem;
  }
</style>
