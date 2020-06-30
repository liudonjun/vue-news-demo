<template>
  <div>
    <collectdetail-header></collectdetail-header>
    <div class="pd9"></div>
    <div class="detail">
      <div class="title">{{newsDetail.title}}</div>
      <div class="item-bottom">
        <p class="item-writer">{{newsDetail.address}}</p>
        <p class="item-updata">{{newsDetail.time}}</p>
      </div>
      <div class="content" v-html="newsDetail.news"></div>
    </div>
  </div>
</template>

<script>
  import CollectdetailHeader from './components/Header'
    export default {
        name: 'Collectdetail',
      components:{
          CollectdetailHeader
      },
      data () {
        return {
          newsDetail:[]
        }
        },
        mounted() {
          var a=this.$route.query.arr
          var b=this.$route.query.str
          this.newsDetail=a[b]
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
