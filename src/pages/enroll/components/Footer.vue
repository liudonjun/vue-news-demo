<template>
    <div class="body">
        <p class="text01"><router-link to="/register" style="color: white;">登录</router-link></p>
        <p class="text02"><router-link to="/forget" style="color:#4eb6fe ;">忘记密码</router-link></p>
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
  }
  .text02{
    margin-top: 160px;
    margin-left: 220px;
  }
</style>
