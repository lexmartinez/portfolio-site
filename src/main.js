
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

console.info('%c', 'line-height:48px;padding:18px 150px;background:url(\'https://lexmartinez.com/static/vue-snip-by.png\') center / contain no-repeat;')
Vue.use(require('vue-moment-jalaali'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
