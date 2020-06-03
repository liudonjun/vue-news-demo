<template>
  <div class="slide">
    <div id="myCarousel" class="carousel slide">
      <!-- 小圆点 -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <!-- item -->
      <div class="carousel-inner">
        <div class="item active">
          <img src="https://img2.mukewang.com/szimg/5ed0dcff0984b5c812000676-360-202.png" alt="First slide">
          <div class="carousel-caption">PyTorch入门到进阶</div>
        </div>
        <div class="item">
          <img src="https://img1.mukewang.com/szimg/5ea0118b0948c90a12000676-360-202.png" alt="Second slide">
          <div class="carousel-caption">Vue+Go前端后端一体化 企业级微服务网关项目</div>
        </div>
        <div class="item">
          <img src="https://img2.mukewang.com/szimg/5ec33dc209743edc12000676-360-202.png" alt="Third slide">
          <div class="carousel-caption">移动端Python爬虫实战-2020版</div>
        </div>
      </div>
      <!-- 两侧按钮 -->
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Slide'
  }
</script>
<style scoped>
  .slide{
    overflow: hidden;
    border-radius: 1.7rem;
  }
  #myCarousel {
    margin: .3rem;
    display: flex;
    flex: 1;
  }
  img {
    width: 100%;
    border: 1px solid #4eb6fe;
  }
  .carousel-caption{
    margin-bottom: -1rem;
  }
  .carousel-indicators{
    margin-bottom: -.5rem;
  }
</style>
