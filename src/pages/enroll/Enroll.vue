<template>
  <div>
    <enroll-header></enroll-header>
    <enroll-center></enroll-center>
    <enroll-footer></enroll-footer>
  </div>
</template>

<script>
  import EnrollHeader from './components/Header'
  import EnrollCenter from './components/Center'
  import EnrollFooter from './components/Footer'
  export default {
    name: 'Enroll',
    components: {
      EnrollHeader, EnrollCenter, EnrollFooter
    }
  }
</script>

<style scoped>

</style>
