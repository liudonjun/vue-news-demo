<template>
  <div><home-header>
    </home-header>
    <tab-item></tab-item>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import TabItem from './components/Tab'
import HomeSwiper from './components/Swiper'

export default {
  name: 'Home',
  components: {
    HomeHeader, TabItem,HomeSwiper
  }
}
</script>

<style scoped>
</style>
