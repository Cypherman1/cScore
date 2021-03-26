import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import VueCookies from 'vue-cookies'

import store from './systems/vuex/store'

import '../../src/components'
import '../../src/styles/common.scss'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueCookies)
Vue.prototype.$http = Axios

const router = new VueRouter()
const vue = new Vue({
  router,
  store,
  template: '<app-frame><router-view></router-view></app-frame>'
}).$mount('#app')

window.__uide__ = {
  Vue,
  vue,
  router,
  store,
  webpackRequire: __webpack_require__,
  webpackAlias: {
    '@': '/src', // node_modules 하위가 아닐 경우 '/'로 시작
    '@uidev': 'uidev-component',
  },
  webpackScssPrependData: `@import "~@/styles/variables.scss";`,
}
