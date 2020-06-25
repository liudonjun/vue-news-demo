<template>
  <div>
    <ul>
      <router-link
        class="item border-bottom"
        v-for="(item,index) of data"
        to="/Detail"
        tag="li"
        :key="index">
        <img class="item-img" :src="item.pic">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <div class="item-bottom">
            <p class="item-writer">{{item.src}}</p>
            <p class="item-updata">{{item.time}}</p>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data () {
      return {
        data: []
      }
    },
    // methods: {
    //   toDetail(content) {
    //     this.$router.push({path:"/Detail",query:{content:this.content}})
    //     console.log(content)
    //   }
    // },
    mounted () {
      this.$axios.get('news/get?channel=头条&start=0&num=20&appkey=2deae84444e749f0')
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
  .item {
    overflow: hidden;
    display: flex;
    height: 7.5rem;
  }

  .item-img {
    border-radius: 1rem;
    width: 7.5rem;
    height: 7.5rem;
    margin-left: .5rem;
    padding: .5rem;
  }

  .item-info {
    min-width: 0;
    overflow: hidden;
    margin-left: .5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1;
    padding: .5rem;
  }

  .item-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #3c4043;
    line-height: 3rem;
    font-size: 1.2rem;
  }

  /*a{*/
  /*  color: #3c4043;*/
  /*  text-decoration: none;*/
  /*}*/

  .item-bottom {
    margin-top: .5rem;
    margin-right: 4rem;
    text-align: center;
    background: #f8f8f8;
    border-left: .5rem solid #0197fe;
  }

  .item-updata {
    margin-top: .2rem;
    color: #f39800;
  }
</style>
