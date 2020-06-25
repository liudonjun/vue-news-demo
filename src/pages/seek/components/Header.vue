<template>
  <div class="header border-bottom">
    <div class="header-input">
      <input placeholder="输入需要搜索的新闻">
      <div class="iconfont select" @click="getenwslist(content)">&#xe7b8;</div>
    </div>
    <router-link to="/">
    <div class="cancel">取消</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data(){
      return{
        data:[]
      }
    },
    mounted () {
      // https://api.jisuapi.com/news/search?keyword=姚明&appkey=8f2abc867fcf2aa5
      this.$axios.get('news/search?keyword=姚明&appkey=8f2abc867fcf2aa5')
        .then(response => (
          this.data = response.data.result.list
        ))
        .catch(function (error) { // 请求失败处理
          console.log(error)
        })
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    line-height: 2.8rem;
    background: #0197fe;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
  }

  .header-input {
    border: 1px solid #eee;
    flex: 1;
    padding-left: 1rem;
    background: #fff;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 5rem;
    color: #000000;
    margin: .2rem .5rem;
  }

  .cancel {
    color: #000;
    margin-top: .2rem;
    height: 2.5rem;
    line-height: 2.5rem;
    background: #fff;
    margin-right: .2rem;
    border-radius: 5rem;
  }

  .select {
    float: right;
    text-align: center;
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  input {
    height: 90%;
    width: 85%;
    border: none;
  }
  a{
    display: block;
    list-style: none;
    text-decoration: none;
  }

</style>
