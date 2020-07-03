<template>
  <div class="head">
    <div class="name1">
      <p class="name2">当前所在页面为：Feedback</p>
      <p class="name3">意见反馈</p>
    </div>
    <router-link to="/login"><div class="photo"></div></router-link>
  </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
  .head{
    display: flex;
    width: 100%;
    height: 200px;
    background:url("../../../assets/images/background.png")no-repeat;
    background-size: cover;
  }
  .name1{
    width: 70%;
    height: 80px;
    font-size: 15px;
    color:rgba(255,255,255,0.5);
    margin-top:40px;
  }
  .name2{
    margin-left: 20px;
  }
  .name3{
    font-size: 50px;
    font-weight: bold;
    margin-left: 20px;
  }
  .photo{
    width: 80px;
    height: 80px;
    margin: 40px auto;
    border: 4px solid white;
    background: url("../../../assets/images/tp.png");
    background-size: cover;
    border-radius: 50%;
  }
</style>
