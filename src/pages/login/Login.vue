<template>
  <div>
    <login-header></login-header>
    <item></item>
  </div>
</template>

<script>
  import LoginHeader from './components/Header'
  import Item from './components/Item'
  export default {
    name: 'Login',
    components: {
      LoginHeader, Item
    }
  }
</script>

<style scoped>

</style>
