<template>
    <div class="body">
      <p>注册的手机号</p>
      <input type="text" id="account" class="form-control text">
      <p style="margin-top: 40px">密码</p>
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
        if (usename === '' || password === '') {
          alert('账号或密码不能为空')
        } else if (usename.length !== 11) {
          alert('手机号输入有误！')
        } else if (password.length<6 ||password.length>16){
          alert('密码的长度必须为6-16字符、数字或字母！')
        }else {
        Bmob.User.login(usename, password).then(res => {
          alert('登录成功')
          localStorage.setItem('user', usename) // 把用户的信息保存到缓存
          localStorage.setItem('objectId',res.objectId)
          localStorage.setItem('nickname', res.nickname)
          let code =this.$route.query.code
          let redirect = decodeURIComponent(this.$route.query.redirect || '/') // 获得路由携带的参数
          console.log("code:"+code)
          console.log("redirect:"+redirect)
          if (code !==undefined){
            this.$router.back()
          } else {
            this.$router.push({path: redirect})//路由跳转
          }
          console.log(res)
        }).catch(err => {
          alert('账号或密码错误')
          console.log(err)
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
    background-image: url("../../../assets/images/login.png");
    margin: 40px auto;
    border: 4px solid lightskyblue;
    border-radius: 50%;
    background-color: #0197fe;
    background-size: cover;
  }
</style>
