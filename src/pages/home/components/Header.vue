<template>
  <div class="header">
    <div class="home-icon"><p> 🐟 假装这是icon</p></div>
    <div class="button-right">
      <router-link to="/seek">
        <div class="iconfont select">&#xe7b8;</div>
      </router-link>
    </div>
    <router-link to="/seek">
    <div class="userinfo iconfont"><img class="userimg" src="../../../assets/images/tp.png" alt=""></div>
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
  p{
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 2rem;
    margin: .1rem ;
    background: white;
  }

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
  .userimg{
    width: 2.2rem;
    height: 2.2rem;
  }
  .button-right{
    right: -10rem;
  }

  .select {
    margin-top: .1rem;
    float: right;
    text-align: center;
    font-size: 2rem;
    margin-right: .5rem;
  }
  a{
    display: block;
    list-style: none;
    text-decoration: none;
  }
</style>
