<template>
  <div>
    <detail-header></detail-header>
    <div class="pd9"></div>
    <div class="detail">
      <div class="title">我是标题</div>
      <div class="item-bottom">
        <p class="item-writer">weqewqwe</p>
        <p class="item-updata">qweqwe</p>
      </div>
      <div class="content">我是内容</div>
    </div>
  </div>
</template>

<script>
  import DetailHeader from './components/Header'

  export default {
    name: 'Detail',
    components: {
      DetailHeader
    }
  }
</script>

<style scoped>
  .pd9{
    padding-bottom: 2.8rem;
  }
  .detail {
    padding: 1rem;
    text-align: center;
    /*background: red;*/
  }

  .title {
    font-size: 2rem;
    color: #3c4043;
  }

  .item-bottom {
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-right: 8rem;
    /*background: #f8f8f8;*/
    /*background: red;*/
    border-left: .5rem solid #0197fe;
  }

  .content {
    background: #f39800;
    padding-bottom: 100rem;
  }

</style>
