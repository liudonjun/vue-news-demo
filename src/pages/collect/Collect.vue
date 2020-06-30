<template>
    <div>
      <collect-header></collect-header>
      <collect-center></collect-center>
    </div>
</template>

<script>
  import CollectHeader from './components/Header'
  import CollectCenter from './components/Center'
    export default {
        name: 'Collect',
      components:{
          CollectHeader, CollectCenter
      }
    }
</script>

<style scoped>

</style>
