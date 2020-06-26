<template>
  <div>
    <router-link to="/JsNews" tag="div" class="header-back" v-show="!showtitle">
      <img class="img-back" src="../../../assets/images/back.png">
    </router-link>
    <div class="header-title" v-show="showtitle" :style="opacityStyle">
      <router-link to="/JsNews" tag="div">
        <img class="img-back" src="../../../assets/images/back.png">
      </router-link>
      <div class="header-title-content">新闻详情</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        showtitle: false,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll () {
        var scrollTop = document.documentElement.scrollTop
        if (scrollTop > 50) {
          let opacity = scrollTop / 120
          opacity = opacity > 1 ? 1:opacity
            this.opacityStyle = {opacity}
          this.showtitle = true
        } else {
          this.showtitle = false
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>

  .header-back {
    position: absolute;
    left: 1rem;
    top: 1.6rem;
    width: 3rem;
    background: rgba(0, 0, 0, .3);
    height: 3rem;
    border-radius: 4rem;
  }

  .img-back {
    position: absolute;
    margin-top: .5rem;
    margin-left: .3rem;
    width: 2rem;
    color: #fff;
    font-size: .4rem;
    background-image: url("../../../assets/images/back.png");
  }

  .header-title {
    width: 100%;
    position: fixed;
    line-height: 2.9rem;
    color: #16418a;
    background: #0197fe;
  }

  .header-title-content {
    color: white;
    text-align: center;
  }

</style>
