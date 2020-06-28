<template>
    <div>
      <feedback-header></feedback-header>
      <feedback-center></feedback-center>
      <feedback-footer></feedback-footer>
    </div>
</template>

<script>
  import FeedbackHeader from './components/Header'
  import FeedbackCenter from './components/Center'
  import FeedbackFooter from './components/Footer'
    export default {
        name: 'Feedback',
      components: {
          FeedbackCenter, FeedbackHeader, FeedbackFooter
      }
    }
</script>

<style scoped>

</style>
