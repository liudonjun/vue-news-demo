<template>
    <div class="body">
      <textarea id="feedback" class="form-control" placeholder="请输入您的意见，方便我们改进产品！"></textarea>
       <div id="commit" v-on:click="fasong">发送</div>
      <p><router-link to="/feedbacktable">反馈列表</router-link></p>
    </div>
</template>

<script>
  import Bmob from 'hydrogen-js-sdk'
    export default {
        name: 'Center',
      methods: {
          fasong: function () {
            var text = document.getElementById('feedback').value
            var name = localStorage.getItem('user')
            const query = Bmob.Query('tb_feedback')
            query.set('name', name)
            query.set('feedback', text)
            query.set('nickname',localStorage.getItem('nickname'))
            query.save().then(res => {
              alert('发送成功')
              console.log(res)
            }).catch(err => {
              alert('发送失败')
              console.log(err)
            })
          }
      }
    }
</script>

<style scoped>
.body{
  width: 80%;
  margin: 20px auto;
}
  #feedback{
    height: 260px;
    padding: 10px;
    border-radius: 20px;
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
    margin-left: 37.5%;
  }
  p{
    text-align: center;
    margin-top: 40px;
  }
</style>
