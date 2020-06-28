<template>
    <div class="body">
      <p>手机号</p>
      <input type="text" id="account" class="form-control text">
      <div class="duanxin">
      <div style="width: 50%">
        <p style="margin-top: 20px">验证码</p>
        <input type="text" id="phone" class="form-control text" >
      </div>
        <div class="button" v-on:click="yanzheng">发送</div>
      </div>
      <p style="margin-top: 20px">设置密码</p>
      <input type="password" id="password" class="form-control text">
      <div class="ok" v-on:click="submit"></div>
    </div>
</template>

<script>
  import Bmob from 'hydrogen-js-sdk'
  export default {
    name: 'Center',
    methods: {
      submit: function () {
        var usename = document.getElementById('account').value
        var password = document.getElementById('password').value
        var code = document.getElementById('phone').value
        if (usename === '' || password === '') {
          alert('手机号、密码、验证码不能为空')
        } else if (usename.length !== 11) {
          alert('手机号输入有误！')
        } else {
        let smsCode = code
        let data = {
          mobilePhoneNumber: usename
        }
        Bmob.verifySmsCode(smsCode, data).then(function (response) {
          let params = {
            username: usename,
            password: password,
            nickname: '游客',
            phone: ''
          }
          Bmob.User.register(params).then(res => {
            alert('注册成功')
            console.log(res)
          }).catch(err => {
            alert('该账户已被注册')
            console.log(err)
          })
          console.log(response)
        })
          .catch(function (error) {
            alert('验证码错误')
            console.log(error)
          })
      }
      },
      yanzheng: function () {
        var usename = document.getElementById('account').value
        let phone = {
          mobilePhoneNumber: usename
        }
        Bmob.requestSmsCode(phone).then(function (response) {
          console.log(response)
        })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>
.body{
  width: 80%;
  margin: -20px auto;
}
  p{
    margin-left:10px;
    color: #4eb6fe;
    font-size: 14px;
  }
  .text{
    height: 50px;
    border-radius: 10px;
  }
  .ok{
    width: 80px;
    height: 80px;
    background-image: url("../../../assets/images/Sure_forgot_password.png");
    margin: 40px auto;
    border: 4px solid lightskyblue;
    border-radius: 50%;
    background-color: #0197fe;
    background-size: cover;
  }
  .duanxin{
    display: flex;
  }
  .button{
    width: 40%;
    height: 50px;
    background: #0197fe;
    text-align: center;
    border-radius: 10px;
    line-height: 50px;
    font-size: 20px;
    color: white;
    margin-top: 40px;
    margin-left: 10%;
  }
</style>
