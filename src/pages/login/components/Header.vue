<template>
    <div class="head">
      <div class="name1">
        <p class="name2">欢迎你：</p>
        <p class="name3" id="nickname">小李</p>
        <div class="photo"></div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Header',
    mounted: function () {
      this.update()
    },
    methods: {
      update: function () {
        var nickname = localStorage.getItem('nickname')
        document.getElementById('nickname').innerText = nickname
      }
    }
  }
</script>

<style scoped>
.head{
  display: flex;
  width: 100%;
  height: 230px;
  background:url("../../../assets/images/background.png")no-repeat;
  background-size: cover;
}
  .name1{
    width: 100%;
    height: 80px;
    color:rgba(255,255,255,0.5);
    margin-top:20px;
  }
  .name2{
    font-size: 20px;
    margin-left: 20px;
  }
  .name3{
    font-size: 80px;
    text-align: center;
    font-weight: bold;
  }
  .photo{
    width: 125px;
    height: 125px;
    overflow: hidden;
    margin: -40px auto;
    border: 4px solid white;
    background: url("../../../assets/images/tp.png");
    border-radius: 50%;
  }
</style>
