<template>
    <div class="head">
      <h3>忘记密码</h3>
      <p>请输入您注册的手机号</p>
      <div class="photo01"></div>
    </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
.head{
  width: 100%;
  height: 150px;
}
  h3{
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin: 20px ;
  }
  p{
    font-size: 15px;
    text-align: center;
  }
  .photo01{
    width: 100%;
    height: 170px;
    background: url("../../../assets/images/RetouchA.png") no-repeat;
    background-position: 210px -40px;
    background-size: cover;
    margin-top: -20px;
  }
</style>
