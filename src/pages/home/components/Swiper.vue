<template>
  <div class="swiper-body">
    <div class="swiper-border">
      <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="item of swiperlist" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
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
          autoplay: true,
          loop: true
        },
        swiperlist: [{
          id: '001',
          imgUrl: 'https://img4.mukewang.com/szimg/5ea7c0ea094bbf0d12000676-360-202.png'
        }, {
          id: '002',
          imgUrl: 'https://img3.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg'
        }, {
          id: '003',
          imgUrl: 'https://img4.mukewang.com/szimg/5ea7c0ea094bbf0d12000676-360-202.png'
        }, {
          id: '004',
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
    overflow: hidden;
    padding-top: 6rem;
    width: 100%;
    height: 0;
    padding-bottom: 56%;
    /*background: #eee;*/
  }

  .swiper-border {
    margin: .6rem;
  }

  .swiper-body {
    background: url("../../../assets/images/background.png");
    background-size: cover;
    -moz-background-size: cover;
  }

  .swiper-img {
    border: 1px solid #4eb6fe;
    border-radius: 2rem;
    width: 100%;
  }
</style>
