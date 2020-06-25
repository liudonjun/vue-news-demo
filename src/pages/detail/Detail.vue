<template>
  <div>
    <detail-header></detail-header>
    <div class="pd9"></div>
    <div class="detail">
      <div class="title">我是标题</div>
      <div class="item-bottom">
        <p class="item-writer">新浪新闻</p>
        <p class="item-updata">2020.06.24</p>
      </div>
      <div class="content">假装这是内容</div>
    </div>
    <div>{{newsDetail}}</div>
    <div v-html="content"></div>
  </div>
</template>

<script>
  import DetailHeader from './components/Header'

  export default {
    name: 'Detail',
    data(){
      return{
        newsDetail:[],
      }
    },
    created() {
      this.content = this.$route.query.newsdetail;
      console.log(this.content)
    },
    components: {
      DetailHeader
    },
    props:['content']
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
    background: #f8f8f8;
    border-left: .5rem solid #0197fe;
  }

  .content {
    background: #f39800;
    padding-bottom: 100rem;
  }

</style>
