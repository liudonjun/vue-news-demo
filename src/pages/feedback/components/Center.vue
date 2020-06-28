<template>
    <div class="body">
      <textarea id="feedback" class="form-control" placeholder="请输入您的意见，方便我们改进产品！"></textarea>
       <div id="commit" v-on:click="fasong">发送</div>
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
    width: 70px;
    height: 40px;
    background: #0197fe;
    color: white;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    border-radius: 8px;
    margin: 30px auto;
  }
</style>
