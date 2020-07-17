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
    <div class="collent"v-on:click="shoucang"><span id="collect">收藏</span></div>
  </div>
</template>

<script>
  import DetailHeader from '../yldetail/components/Header'
  export default {
    name: 'YlDetail',
    data () {
      return {
        index: this.$route.params.index,
        newsDetail: [],
        num:1,
        id:''
      }
    },
    components:{
      DetailHeader
    },
    mounted () {
      this.$axios.get('news/get?channel=娱乐&start=0&num=20&appkey=2deae84444e749f0')
        .then(response => (
          this.newsDetail = response.data.result.list[this.index]
        ))
        .catch(function (error) { // 请求失败处理
          console.log(error)
        })
    },
    methods:{
      shoucang:function () {
        var username=localStorage.getItem('user')
        const query = Bmob.Query('tb_collect')
        var b=localStorage.getItem('code')
        if(localStorage.getItem('user')){
          if (b==1){
            var a=this.newsDetail
            if (this.num%2==1){
              query.set("username",username)
              query.set("img",a.pic)
              query.set("title",a.title)
              query.set("address",a.src)
              query.set("news",a.content)
              query.set("time",a.time)
              query.save().then(res => {
                this.id=res.objectId
                document.getElementById('collect').innerText='取消收藏'
                alert('收藏成功')
                console.log(res)
              }).catch(err => {
                alert('收藏失败')
                console.log(err)
              })
            }else if (this.num%2==0){
              query.destroy(this.id).then(res => {
                document.getElementById('collect').innerText='收藏'
                alert('已取消收藏')
                console.log(res)
              }).catch(err => {
                alert('取消收藏失败')
                console.log(err)
              })
            }
          }else if (b==2) {
            var a=this.newsDetail
            if (this.num%2==1){
              const query = Bmob.Query('tb_collect')
              query.equalTo("title","==", a.title)
              query.find().then(res => {
                this.id=res[0].objectId
                query.destroy(this.id).then(res => {
                  document.getElementById('collect').innerText='收藏'
                  alert('已取消收藏')
                  console.log(res)
                }).catch(err => {
                  alert('取消收藏失败')
                  console.log(err)
                })
                console.log(res)
              })
            }
            if (this.num%2==0){
              query.set("username",username)
              query.set("img",a.pic)
              query.set("title",a.title)
              query.set("address",a.src)
              query.set("news",a.content)
              query.set("time",a.time)
              query.save().then(res => {
                document.getElementById('collect').innerText='取消收藏'
                alert('收藏成功')
                console.log(res)
              }).catch(err => {
                alert('收藏失败')
                console.log(err)
              })
            }
          }
          this.num++
        }else {
          alert('你当前还没有登录,请先登录!')
          this.$router.push({path:'/register',query:{code:1}})
        }
      },
      update:function () {
        var news=this.newsDetail
        const query = Bmob.Query('tb_collect')
        query.equalTo("title","==",news.title)
        query.find().then(res => {
          if (res.length == 0) {
            localStorage.setItem('code',1)
          }else if (res.length !=0) {
            localStorage.setItem('code',2)
            document.getElementById('collect').innerText='取消收藏'
          }
          console.log(res)
        })
      }
    },
    updated() {
      this.update()
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
