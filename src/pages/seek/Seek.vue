<template>
  <div>
    <div class="header border-bottom">
      <div class="header-input">
        <input placeholder="输入需要搜索的新闻" v-model="keyword">
        <div class="iconfont select" @click="getenwslist(keyword)">&#xe7b8;</div>
      </div>
      <router-link to="/">
        <div class="cancel">取消</div>
      </router-link>
    </div>
    <div class="pd6"></div>
    <div class="banner-title">
      <ul>
        <router-link
          tag="li"
          class="item border-bottom"
          v-for="(item,index) of data"
          :to="'/SwiperDetail/'+keyword+'/'+index"
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
  </div>
</template>

<script>
  export default {
    name: 'Seek',
    data () {
      return {
        data: [],
        keyword: ''
      }
    },
    methods: {
      getenwslist (keyword) {
        this.$axios.get('news/search?keyword=' + keyword + '&appkey=9a278a868ae2a55f')
          .then(response => (
            this.data = response.data.result.list
          ))
          .catch(function (error) { // 请求失败处理
            console.log(error)
          })
      },
    }
  }
</script>

<style scoped>
  .pd6 {
    padding-bottom: 2.9rem;
  }

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

  a {
    display: block;
    list-style: none;
    text-decoration: none;
  }

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
