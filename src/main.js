import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import brands from "@fortawesome/fontawesome-free-brands"
import {library}  from '@fortawesome/fontawesome-svg-core'
import {faCoffee}  from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from "@fortawesome/free-solid-svg-icons"


library.add(fas);
library.add(faCoffee)
library.add(brands)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
