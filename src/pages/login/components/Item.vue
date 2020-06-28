<template>
    <div class="items">
      <router-link to=""><div class="tab"><img src="../../../assets/images/Favorite_icon.png" width="45px" height="45px"><p>我的收藏</p></div></router-link>
      <router-link to=""><div class="tab"><img src="../../../assets/images/Comment_icon.png" width="45px" height="45px"><p>我的评论</p></div></router-link>
      <router-link to="/feedback"><div class="tab"><img src="../../../assets/images/Feedback_icon.png" width="45px" height="45px"><p>意见反馈</p></div></router-link>
      <router-link to="/information"><div class="tab"><img src="../../../assets/images/Change_password_icon.png" width="45px" height="45px"><p>修改资料</p></div></router-link>
      <div class="exit" v-on:click="exit"></div>
    </div>
</template>

<script>
  import Bmob from 'hydrogen-js-sdk'
    export default {
        name: 'Item',
      methods: {
          exit: function () {
            Bmob.User.logout() // 退出登录状态，并清理本地全部缓存
            alert('已退出登录')
            this.$router.push({path: '/'})
          }
      }
    }
</script>

<style scoped>
.items{
  width: 100%;
}
  .tab{
    display: flex;
    margin: 30px auto;
    width: 12rem;
    height: 3rem;
    line-height: 3rem;
    border:1px solid silver;
    border-radius: 5rem;
  }
  img{
    margin-left: 20px;
  }
  p{
    color: black;
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  .exit{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: red;
    background-image: url("../../../assets/images/Exit_icon.png");
    background-size: cover;
    border: 6px solid lightcoral;
    margin: 20px auto;
  }
</style>
