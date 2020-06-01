import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/bordor.css'

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
