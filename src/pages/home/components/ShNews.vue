<template>
  <div>
    <div class="pd6"></div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of data" :key="index">
        <img class="item-img" :src="item.thumbnail_pic_s">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <div class="item-bottom">
            <p class="item-writer">{{item.author_name}}</p>
            <p class="item-updata">{{item.date}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'ShNews',
    data () {
      return {
        data:[]
      }
    },
    mounted () {
      this.$axios.get('toutiao/index?type=shehui&key=f282cb150846539128165be835767d3a')
        .then(response => (
          this.result = response.data,
            this.data = response.data.result.data
        ))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
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
