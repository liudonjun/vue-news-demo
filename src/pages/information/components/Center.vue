<template>
    <div class="body">
      <div style="width: 50%">
        <p>昵称</p>
        <input type="text" id="nickname" class="form-control text">
      </div>
      <p style="margin-top: 15px">注册手机号</p>
      <input type="text" id="phone" class="form-control text">
      <p style="margin-top: 15px">修改密码</p>
      <div class="change">
        <div style="width: 80%;margin: 0 auto">
        <p style="margin-top: 15px">旧密码</p>
      <input type="password" id="oldpassword" class="form-control text">
        <p style="margin-top: 10px;">新密码</p>
        <input type="password" id="newpassword" class="form-control text" style="margin-bottom: 15px">
        </div>
      </div>
      <div id="commit" v-on:click="xiugai">修改</div>
    </div>
</template>

<script>
  import Bmob from 'hydrogen-js-sdk'
    export default {
        name: 'Center',
      created: function () {
        this.update()
      },
      methods: {
          update: function () {
            const query = Bmob.Query('_User')
            query.equalTo("username","==", localStorage.getItem('user'))
            query.find().then(res => {
              document.getElementById('nickname').value = res[0].nickname
              document.getElementById('phone').value = res[0].username
              console.log(res)
            })
          },
          xiugai: function () {
            var nickname = document.getElementById('nickname').value
            var phone = document.getElementById('phone').value
            var oldpassword = document.getElementById('oldpassword').value
            var newpassword = document.getElementById('newpassword').value
            if (oldpassword === '' && newpassword !== '') {
              alert('旧密码不能为空!')
            } else if (oldpassword !== '' && newpassword === '') {
              alert('新密码不能为空！')
            } else if (oldpassword !== '' && newpassword !== '') {
              let objectId = localStorage.getItem('objectId')
              let data = {
                oldPassword: oldpassword,
                newPassword: newpassword
              }
              Bmob.updateUserPassword(objectId, data).then(res => {
                alert('检测到当前账户信息发生改变，请重新登录！')
                Bmob.User.logout()
                this.$router.push({path: '/'})
                console.log(res)
              }).catch(err => {
                console.log(err)
              })
            }
            if (nickname === '' || phone === '') {
              alert('昵称、手机号不能为空！')
            } else if (nickname !== '' && phone === '') {
              var objectId = localStorage.getItem('objectId')
              const query = Bmob.Query('_User')
              query.get(objectId).then(res => {
                res.set('nickname', nickname)
                res.set('username', phone)
                res.save()
                console.log(res)
                alert('检测到当前账户信息发生改变，请重新登录！')
                Bmob.User.logout()
                this.$router.push({path: '/'})
              }).catch(err => {
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
  margin:0px auto;
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
#commit{
  width: 25%;
  height: 40px;
  background: #0197fe;
  color: white;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  border-radius: 8px;
  margin-top: 30px;
  margin-left: 75%;
}
  .change{
    border: 1.5px solid #cccccc;
    border-radius: 10px;
  }
</style>
