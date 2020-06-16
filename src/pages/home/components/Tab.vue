<template>
  <div class="link">
    <ul>
      <!--tab列表项-->
      <li
        @click="addClass(item,idx)"
        v-for="(item,idx) of items"
        :class=" idx == index ? 'active':''"
        :key="idx">
        <router-link to="" class="a">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Tab',
    data () {
      return {
        index: 0,
        items: [
          {
            id: '001',
            title: '推荐'
          },
          {
            id: '002',
            title: '热点'
          },
          {
            id: '003',
            title: '娱乐'
          },
          {
            id: '004',
            title: '财经'
          },
          {
            id: '005',
            title: '旅游'
          }
        ]
      }
    },
    methods: {
      addClass (ietm, idx) {
        this.index = idx
      }
    }
  }
</script>

<style scoped>
  /*选中状态*/
  .active {
    border: 1px solid #ffffff;
    background: #1fa3fe;
    border-radius: 2rem;
    color: white;
    text-decoration: none;
  }

  .link {
    height: 3.2rem;
    background: #0197fe;
    display: flex;
    position: fixed;
    width: 100%;
    left: 0;
    top: 2.86rem;
    z-index: 1000;
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

  a {
    color: white;
    text-decoration: none;
  }

  .router-link-active {
    color: white;
    text-decoration: none;
  }

</style>
