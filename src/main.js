import Vue from 'vue'
import App from './App'
import store from './lib/store'
import VueFire from 'vuefire'
Vue.use(VueFire)

Vue.config.productionTip = false

// eslint-disable-next-line
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
