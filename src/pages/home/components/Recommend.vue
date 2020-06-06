<template>
  <div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendlist" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <div class="item-bottom">
            <p class="item-writer">{{item.writer}}</p>
            <p class="item-updata">{{item.updata}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data () {
      return {
        recommendlist: [
          {
            id: '001',
            imgUrl: 'https://img4.mukewang.com/5e906f130001f14802940333.jpg',
            title: '趣味剖析Spring5核心原理',
            writer: '搜狐新闻',
            updata: '2019.8.4'
          }, {
            id: '002',
            imgUrl: 'https://img1.mukewang.com/5eb68ac10001029202940333.jpg',
            title: 'Python 源码深度剖析',
            writer: '搜狐新闻',
            updata: '2020.8.1'
          }, {
            id: '003',
            imgUrl: 'https://img2.mukewang.com/5e9cfd150001349b02940333.jpg',
            title: 'SpringBoot 趣味私房课',
            writer: '搜狐新闻',
            updata: '2019.8.4'
          }, {
            id: '004',
            imgUrl: 'https://img2.mukewang.com/5e9cfd150001349b02940333.jpg',
            title: 'SpringBoot 趣味私房课',
            writer: '搜狐新闻',
            updata: '2019.8.4'
          }, {
            id: '005',
            imgUrl: 'https://img4.mukewang.com/5e906f130001f14802940333.jpg',
            title: '趣味剖析Spring5核心原理',
            writer: '搜狐新闻',
            updata: '2019.8.4'
          }, {
            id: '006',
            imgUrl: 'https://img1.mukewang.com/5eb68ac10001029202940333.jpg',
            title: 'Python 源码深度剖析',
            writer: '搜狐新闻',
            updata: '2020.8.1'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .item {
    overflow: hidden;
    display: flex;
    height: 7.5rem;
    /*background: red;*/
  }

  .item-img {
    width: 7.5rem;
    height: 7.5rem;
    margin-left: .5rem;
    padding: .5rem;
  }

  .item-info {
    min-width: 0;
    overflow: hidden;
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
    margin-right: 6.5rem;
    text-align: center;
    background: #f8f8f8;
    border-left: .5rem solid #0197fe;
  }

  .item-updata {
    margin-top: .2rem;
    color: #f39800;
  }
</style>
