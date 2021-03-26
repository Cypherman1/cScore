import Vue from 'vue'
import Theme from './Theme.vue'

import uidevComponent from 'uidev-component/index'
import '../common.scss'

Vue.config.productionTip = false

Vue.use(uidevComponent)

new Vue({
  render: h => h(Theme)
}).$mount('#app')
