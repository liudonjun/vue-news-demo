<template>
  <div>
    <register-header></register-header>
    <register-center></register-center>
    <register-footer></register-footer>
  </div>
</template>
<script>
  import RegisterHeader from './components/Header'
  import RegisterCenter from './components/Center'
  import RegisterFooter from './components/Footer'
  export default {
    name: 'register',
    components: {
      RegisterHeader, RegisterCenter, RegisterFooter
      }
    }
</script>

<style scoped>

</style>
