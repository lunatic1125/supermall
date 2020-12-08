import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTop = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
