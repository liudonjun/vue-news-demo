<template>
    <div class="body">
        <router-link to="/register"><p class="text01">登录</p></router-link>
      <router-link to="/enroll"><p class="text02">注册</p></router-link>
    </div>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style scoped>
  .body{
    width: 100%;
    height: 200px;
    display: flex;
    background: url("../../../assets/images/RetouchB.png")no-repeat;
    background-size: cover;
    background-position: -180px 10px;
    text-align: center;
    margin-top: -80px;
 }
  .text01{
    margin-top: 160px;
    margin-left:35px ;
    color: white;
  }
  .text02{
    margin-top: 160px;
    margin-left: 220px;
    color:#4eb6fe ;
  }
</style>
