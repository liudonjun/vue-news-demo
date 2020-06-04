<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of swiperlist" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data () {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay:true,
          loop:true
        },
        swiperlist: [{
          id: '001',
          imgUrl: 'https://img4.mukewang.com/szimg/5ea7c0ea094bbf0d12000676-360-202.png'
        }, {
          id: '002',
          imgUrl: 'https://img3.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg'
        }]
      }
    }
  }
</script>
<style scoped>
  /*wrapper的样式的子组件，的active选中状态都变成白色*/
  .wrapper >>> .swiper-pagination-bullet-active {
    background: white;
  }

  .wrapper {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 56%;
    background: #eee;
  }

  .swiper-img {
    width: 100%;
  }
</style>
