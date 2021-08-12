import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueObserveVisibility from 'vue-observe-visibility'

import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'


Vue.use(VueObserveVisibility)

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
