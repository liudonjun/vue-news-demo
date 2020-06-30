<template>
  <div>
    <ul>
      <router-link class="item border-bottom" v-for="(item,index) of news" :to="{name:'Collectdetail',query:{arr:news,str:index}}" tag="li" :key="index">
        <img class="item-img" :src="item.img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <div class="item-bottom">
            <p class="item-writer">{{item.address}}</p>
            <p class="item-updata">{{item.time}}</p>
          </div>
        </div>
      </router-link>
    </ul>
    <p id="hint">您还没有收藏哦，快去添加试试吧！</p>
  </div>
</template>

<script>
  import Bmob from 'hydrogen-js-sdk'
    export default {
        name: 'Center',
      data(){
          return{
          news:[]
        }

      },
      mounted() {
            const query = Bmob.Query("tb_collect");
            query.equalTo("username","==", localStorage.getItem('user'));
            query.find().then(res => {
              this.news=res
              if (res.length==0){
                document.getElementById('hint').style.visibility='visible'
              }
              console.log(res)
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
  #hint{
    width: 100%;
    height: 300px;
    text-align: center;
    line-height: 300px;
    font-size: 20px;
    color: #cccccc;
    visibility: hidden;
    margin: 20px auto;
  }
</style>
