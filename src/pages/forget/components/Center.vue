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
      <p style="margin-top: 20px">新密码</p>
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
        var username =document.getElementById('account').value
        var password = document.getElementById('password').value
        var code = document.getElementById('phone').value
        if (password === '' || code === '' || username ==='') {
          alert('手机号、验证码、新密码不能为空！')
        } else if (password.length<6 ||password.length>16){
          alert('密码的长度必须为6-16字符、数字或字母！')
        }else{
          let smsCode = code
          let data = {
            mobilePhoneNumber: username
          }
          Bmob.verifySmsCode(smsCode, data).then(function (response) {
            const query = Bmob.Query("_User");
            query.equalTo("username","==", username);
            query.find().then(res => {
              query.get(res[0].objectId).then(res => {
                console.log(res)
                res.set('password',password)
                res.save()
                alert('修改成功！')
              }).catch(err => {
                console.log(err)
              })
              console.log(res)
            })
            console.log(response);
          })
            .catch(function (error) {
              alert('验证码错误！')
              console.log(error);
            })
        }
      },
      yanzheng: function () {
        var usename = document.getElementById('account').value
        if (usename === '') {
          alert('手机号不能为空！')
        } else if (usename.length !== 11) {
          alert('手机号输入有误！')
        }else {
          let phone = {
            mobilePhoneNumber: usename,
            // template:'forget'
          }
          Bmob.requestSmsCode(phone).then(function (response) {
            alert('验证码已发送！')
            console.log(response)
          })
            .catch(function (error) {
              console.log(error)
            })
        }
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
