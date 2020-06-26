<template>
  <div>
  <div class="pd6"></div>
    <div>
      <ul>
        <router-link
          class="item border-bottom"
          v-for="(item,index) of data"
          :to="'/YlDetail/'+index"
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
  </div>
</template>

<script>
  export default {
    name: 'YlNews',
    data () {
      return {
        data: []
      }
    },
    mounted () {
      this.$axios.get('news/get?channel=娱乐&start=0&num=20&appkey=8f2abc867fcf2aa5')
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
  .pd6 {
    overflow: hidden;
    background: #ccc;
    padding-top: 6rem;
    width: 100%;
    height: 0;
    /*padding-bottom: 56%;*/
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
