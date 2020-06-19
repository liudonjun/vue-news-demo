<template>
  <div>
      <home-header></home-header>
      <tab-item></tab-item>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import TabItem from './components/Tab'
  import HomeSwiper from './components/Swiper'
  import HomeRecommend from './components/Recommend'
  export default {
    name: 'Home',
    components: {
      HomeRecommend,
      HomeHeader, TabItem, HomeSwiper
    }
  }
</script>

<style scoped>
</style>
