<template>
  <div class="search-banner">
    <div class="banner-title">
      <span>猜你想搜的</span>
      <img class="icon-img" src="../../../assets/images/tp.png" width="15rem" height="15rem" @click="toggleVisible">
    </div>
    <ul class="keyword-list" v-if="isVisible">
      <li
        class="keyword-item one-line"
        v-for="(keyword, index) in recKeywords"
        :key="index"
      >{{ keyword }}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'TopSearch',
    data () {
      return {
        data: [],
        isVisible: true,
        recKeywords: ['5G', '华为新机', '滴滴', '恒大全面大降价', '中国最厉害的后卫', '德安东尼', '应采儿', '黄磊', '冯绍峰', '赵丽颖', '地中海'],
      }
    },
    methods: {
      toggleVisible: function () {
        this.isVisible = !this.isVisible
      }
      // getnewslist:function () {
      //   this.$axios.get('news/get?channel=头条&start=0&num=10&appkey=8f2abc867fcf2aa5')
      //     .then(response => (
      //       this.data = response.data.result.list
      //     ))
      //     .catch(function (error) { // 请求失败处理
      //       console.log(error)
      //     })
      // }
    },
    // mounted () {
    //   // https://api.jisuapi.com/news/get?channel=头条&start=0&num=10&appkey=8f2abc867fcf2aa5
    //   this.$axios.get('news/get?channel=头条&start=0&num=10&appkey=8f2abc867fcf2aa5')
    //     .then(response => (
    //       this.data = response.data.result.list
    //     ))
    //     .catch(function (error) { // 请求失败处理
    //       console.log(error)
    //     })
    // }
  }
</script>

<style scoped>
  .one-line {
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: nowrap;
  }

  .icon-img {
    margin-left: 13rem;
  }

  .banner-title {
    margin: 1.2rem;
  }

  .keyword-item {
    padding: .3rem;
    border-bottom: 1px solid #e8e8e8;
  }

  .keyword-list {
    margin: 1.2rem;
  }

</style>
