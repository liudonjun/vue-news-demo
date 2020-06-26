<template>
    <div>
      <forget-header></forget-header>
      <forget-center></forget-center>
      <forget-footer></forget-footer>
    </div>
</template>

<script>
  import ForgetHeader from './components/Header'
  import ForgetCenter from './components/Center'
  import ForgetFooter from './components/Footer'
  export default {
    name: 'Forget',
    components: {
     ForgetHeader, ForgetCenter, ForgetFooter
    }
  }
</script>

<style scoped>

</style>
