<template>
  <div class="swiper-body">
    <div class="swiper-border">
      <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="item of swiperlist" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
            <div class="carousel-caption item-desc">{{item.desc}}</div>
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
          desc:"《怪你过分美丽》写透娱乐圈的光怪陆离后 ，能否张扬真正的“行业之魂”",
          imgUrl: 'https:\\/\\/08imgmini.eastday.com\\/mobile\\/20200622\\/20200622081557_780a4d2b624d27f14712af1a039623e7_4_mwpm_03200403.jpg'
        }, {
          id: '002',
          desc:"传奇诞生！拉莫斯成西甲历史第一，皇马2-1获胜反超巴萨暂列第一",
          imgUrl: 'https:\\/\\/06imgmini.eastday.com\\/mobile\\/20200622\\/20200622080723_6543e5456c9aa2738b41b7fa30ab123f_2_mwpm_03200403.jpg'
        }, {
          id: '003',
          desc:"皮克又看穿?皇马疑3次争议获利 对手:我们被气炸了!",
          imgUrl: 'https:\\/\\/05imgmini.eastday.com\\/mobile\\/20200622\\/20200622075714_946801c4b17758ceb77f858b47429cdc_1_mwpm_03200403.jpg'
        }, {
          id: '004',
          desc:"恒大右后卫位置将迎新面孔，热身赛已登场亮相，未来有望黑马上位",
          imgUrl: 'https:\\/\\/06imgmini.eastday.com\\/mobile\\/20200622\\/20200622080008_800c726499a457bc75fff3d6fa97275a_1_mwpm_03200403.jpg'
        }]
      }
    }
  }
</script>
<style scoped>
  @media screen and (min-width: 320px) and (max-width: 480px) {
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
    .item-desc{
      bottom: -.5rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 3rem;
    }

    .swiper-border {
      margin: .6rem;
    }

    .swiper-body {
      background: url("../../../assets/images/background.png");
      background-size: cover;
      -moz-background-size: cover;
      height: 100%;
    }

    .swiper-img {
      border: 1px solid #4eb6fe;
      border-radius: 2rem;
      width: 100%;
      height: 12rem;
    }
  }

  @media only screen and (min-width: 1029px) {
    /*wrapper的样式的子组件，的active选中状态都变成白色*/
    .wrapper >>> .swiper-pagination-bullet-active {
      background: white;
    }

    .wrapper {
      overflow: hidden;
      padding-top: 6rem;
      width: 100%;
      height: 0;
      padding-bottom: 43%;
    }

    .swiper-border {
      margin: .6rem;
    }

    .swiper-body {
      background: url("../../../assets/images/background.png");
      background-size: cover;
      -moz-background-size: cover;
      height: 100%;
    }

    .swiper-img {
      border: 1px solid #4eb6fe;
      border-radius: 2rem;
      width: 100%;
      height: 48rem;
    }
  }
</style>
