<template>
  <div class="header">
    <div class="header-input">
      <input placeholder="输入需要搜索的新闻">
      <div class="iconfont select">&#xe7b8;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .header {
    display: flex;
    line-height: 2.86rem;
    background: #0197fe;
  }

  .header-input {
    flex: 1;
    padding-left: 1rem;
    background: #fff;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 5rem;
    color: #000000;
    margin: .2rem .5rem;
  }
  .select{
    float: right;
    text-align: center;
    font-size: 1.2rem;
    margin-right: 1rem;
  }
  input{
    height: 90%;
    width: 85%;
    border: none;
  }
</style>
