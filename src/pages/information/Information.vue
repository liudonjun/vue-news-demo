<template>
    <div>
      <information-header></information-header>
      <information-center></information-center>
    </div>
</template>

<script>
  import InformationHeader from './components/Header'
  import InformationCenter from './components/Center'
    export default {
        name: 'Information',
      components: {
          InformationHeader, InformationCenter
      }
    }
</script>

<style scoped>

</style>
