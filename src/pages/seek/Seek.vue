<template>
  <div>
    <seek-header></seek-header>
    <div class="pd6"></div>
    <seek-top></seek-top>
  </div>
</template>

<script>
  import SeekTop from './components/TopSearch'
  import SeekHeader from './components/Header'

  export default {
    name: 'Seek',
    components: {
      SeekTop,SeekHeader
    }
  }
</script>

<style scoped>
  .pd6 {
    padding-bottom: 2.9rem;
  }

</style>
