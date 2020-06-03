<template>
  <div class="link">
    <ul>
      <li class="active">
        <router-link to="">推荐</router-link>
      </li>
      <li>
        <router-link to="">热点</router-link>
      </li>
      <li>
        <router-link to="">娱乐</router-link>
      </li>
      <li>
        <router-link to="">财经</router-link>
      </li>
      <li>
        <router-link to="">旅游</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tab'
}
</script>

<style scoped>
  /*选中状态*/
  .active{
    border: 1px solid #ffffff;
    background: #1fa3fe;
    border-radius: 2rem;
  }
  .link {
    height: 3.2rem;
    background: #0197fe;
    display: flex;
  }
  ul {
    flex-wrap: nowrap;
    width: 100%;
    list-style: none;
    display: flex;
    /*均匀分布*/
    justify-content: space-around;
    align-items: center;
  }
  li {
    padding: .5rem;
    display: flex;
  }
  a{
    color: white;
    text-decoration: none;
  }

</style>
