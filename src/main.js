import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router: routes,
  store,
  render: h => h(App),
}).$mount('#app')
