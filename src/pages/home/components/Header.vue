<template>
  <div class="header">
    <div>
      <img class="icon-img" src="../../../assets/images/icon.jpg">
    </div>
    <div class="home-icon"></div>
    <div class="button-right">
      <router-link to="/seek">
        <div class="iconfont select">&#xe7b8;</div>
      </router-link>
    </div>
    <router-link to="/login">
      <div class="userinfo iconfont"><img class="userimg" src="../../../assets/images/tp.png"></div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  .header {
    display: flex;
    line-height: 2.86rem;
    background: #0197fe;
    /*background: white;*/
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
  }

  .home-icon {
    margin-left: 1.5rem;
    display: flex;
    flex: 1;
  }

  p {
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    margin: .1rem;
  }

  /*头像*/
  .userinfo {
    margin: .3rem;
    width: 2.2rem;
    overflow: hidden;
    height: 2.2rem;
    line-height: 2.86rem;
    border: 2px solid #000000;
    background-image: url("../../../assets/images/background.png");
    border-radius: 2rem;
  }

  /*logo*/
  .icon-img {
    margin: .3rem 0 0 1rem;
    /*width: 2.2rem;*/
    overflow: hidden;
    height: 2.2rem;
    line-height: 2.86rem;
    border-radius: .8rem 2rem 2rem .8rem;

  }

  .userimg {
    width: 2.2rem;
    height: 2.2rem;
  }

  .button-right {
    right: -10rem;
  }

  .select {
    margin-top: .1rem;
    float: right;
    text-align: center;
    font-size: 2rem;
    margin-right: .5rem;
  }

  a {
    display: block;
    list-style: none;
    text-decoration: none;
  }
</style>
