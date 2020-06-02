<template>
  <div class="header">
    <div class="header-input">输入要搜素的新闻!</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .header {
    display: flex;
    line-height: 2.86rem;
    background: #0197fe;
  }

  .header-input {
    flex: 1;
    padding-left: 1rem;
    background: #fff;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 5rem;
    color: #bbbbbb;
    margin: 0 .5rem;
    margin-top: .3rem;
    margin-bottom: .3rem;
  }
</style>
