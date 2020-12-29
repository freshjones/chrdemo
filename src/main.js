import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import App from './App.vue'
import './assets/tailwind.css'
import './assets/app.css'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faShoppingCart, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)
library.add(faShoppingCart)
library.add(faChevronDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import store from './stores/store';

new Vue({
  router,
  store: new Vuex.Store(store),
  render: h => h(App)
}).$mount('#app')
