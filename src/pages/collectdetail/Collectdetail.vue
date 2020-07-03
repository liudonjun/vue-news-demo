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
    <div class="collent"v-on:click="cancel" id="collect"><span >取消收藏</span></div>
  </div>
</template>

<script>
  import CollectdetailHeader from './components/Header'
  import Bmob from 'hydrogen-js-sdk'
    export default {
        name: 'Collectdetail',
      components:{
          CollectdetailHeader
      },
      data () {
        return {
          newsDetail:[],
          id:''
        }
        },
        mounted() {
          var a=this.$route.query.arr
          var b=this.$route.query.str
          this.newsDetail=a[b]
        },
      methods:{
          cancel:function () {
            var a=this.newsDetail
            const query = Bmob.Query('tb_collect')
            query.equalTo("title","==", a.title)
            query.find().then(res => {
              this.id=res[0].objectId
                query.destroy(this.id).then(res => {
                  document.getElementById('collect').style.visibility='hidden'
                  alert('已取消收藏')
                  console.log(res)
                }).catch(err => {
                  alert('取消收藏失败')
                  console.log(err)
                })
              console.log(res)
            })
          }
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
  .collent{
    width: 80px;
    height: 36px;
    color: white;
    line-height: 36px;
    background: #0197fe;
    text-align: center;
    border-radius: 10px;
    margin-left: 260px;
    margin-bottom: 30px;
  }
</style>
