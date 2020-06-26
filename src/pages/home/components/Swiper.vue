<template>
  <div class="swiper-body">
    <div class="swiper-border">
      <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item,index) of swiperlist" :key="index" :to="'/SwiperDetail/'+index">
            <img class="swiper-img" :src="item.pic">
            <div class="carousel-caption item-desc">{{item.title}}</div>
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
        swiperlist: []
      }
    },
    mounted () {
      this.$axios.get('news/get?channel=教育&start=0&num=5&appkey=8f2abc867fcf2aa5')
        .then(response => (
          this.swiperlist = response.data.result.list
        ))
        .catch(function (error) { // 请求失败处理
          console.log(error)
        })
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

    .item-desc {
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
