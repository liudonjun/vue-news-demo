<template>
  <div>
    <detail-header></detail-header>
    <div class="pd9"></div>
    <div class="detail">
      <div class="title">{{newsDetail.title}}</div>
      <div class="item-bottom">
        <p class="item-writer">{{newsDetail.src}}</p>
        <p class="item-updata">{{newsDetail.time}}</p>
      </div>
      <div class="content" v-html="newsDetail.content"></div>
    </div>
  </div>
</template>

<script>
  import DetailHeader from '../Jsdetail/components/Header'
  export default {
    name: 'JsDetail',
    data () {
      return {
        index: this.$route.params.index,
        newsDetail: [],
      }
    },
    components:{
      DetailHeader
    },
    mounted () {
      this.$axios.get('news/get?channel=军事&start=0&num=20&appkey=202e0b3f219ee76b')
        .then(response => (
          this.newsDetail = response.data.result.list[this.index]
        ))
        .catch(function (error) { // 请求失败处理
          console.log(error)
        })
    }
  }
</script>

<style scoped>
  .content >>> img,p,span {
    width: 100%;
  }
  .pd9 {
    padding-bottom: 2.8rem;
  }

  .detail {
    padding: 1rem;
    text-align: center;
  }

  .title {
    margin-top: 1rem;
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
</style>
