<template>
    <div>
      <topnews-swiper></topnews-swiper>
      <topnews-recommend></topnews-recommend>
    </div>

</template>

<script>
  import TopnewsRecommend from '../components/Recommend'
  import TopnewsSwiper from '../components/Swiper'

  export default {
    name: 'TopNews',
    components:{
      TopnewsSwiper,TopnewsRecommend
    }
  }
</script>

<style scoped>

</style>
