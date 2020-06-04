<template>
  <div><home-header>
    </home-header>
    <tab-item></tab-item>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import TabItem from './components/Tab'
import SlideShow from './components/Slide'

export default {
  name: 'Home',
  components: {
    HomeHeader, TabItem
  }
}
</script>

<style scoped>
</style>
