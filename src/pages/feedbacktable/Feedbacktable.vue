<template>
    <div>
      <div class="head">
        <p class="title">反馈列表</p>
        <div class="photo"></div>
      </div>
      <ul style="width: 80%;margin: 0px auto;">
        <li id="table" v-for="text of feedbacks">
          <div id="text">{{text.feedback}}</div>
          <div id="author">— — {{text.nickname}}</div>
          <div id="time">{{text.createdAt}}</div>
          <hr>
        </li>
      </ul>
    </div>
</template>
<script>
  import Bmob from 'hydrogen-js-sdk'
    export default {
        name: 'Feedbacktable',
      data(){
          return{
            feedbacks: []
          }
      },
      mounted:function () {
        const query = Bmob.Query("tb_feedback");
        query.find().then(res => {
          this.feedbacks=res
          console.log("昵称："+this.feedbacks.nickname)
          console.log(res)
        });
      }
    }
</script>

<style scoped>
  .head{
    display: flex;
    width: 100%;
    height: 200px;
    background:url("../../assets/images/background.png")no-repeat;
    background-size: cover;
  }

  .title{
    margin-top: 40px;
    color:rgba(255,255,255,0.5);
    font-size: 50px;
    font-weight: bold;
    margin-left: 20px;
  }
  .photo{
    width: 80px;
    height: 80px;
    margin: 40px auto;
    border: 4px solid white;
    background: url("../../assets/images/logo.png");
    background-size: cover;
    border-radius: 50%;
  }
  #text{
    width: 100%;
    height: 80px;
    border: 1px solid lightskyblue;
    border-radius: 15px;
    overflow: auto;
    margin: 10px auto;
    padding: 10px;
    color: #cccccc;
    font-size: 15px;
  }
  #author{
    font-size: 15px;
    text-align: right;
    margin-right: 10px;
    color: #cccccc;
  }
  #time{
    font-size: 15px;
    text-align: right;
    margin-right: 10px;
    margin-top: 5px;
    margin-bottom: -10px;
    color: #cccccc;
  }
</style>
