import Vue from 'vue'
import App from './App.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'leaflet/dist/leaflet.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuex from 'vuex'

import router from './router'

Vue.use(VueAxios, axios)
Vue.use(Buefy)
Vue.use(Vuex)

Vue.config.productionTip = false

const API_URL = 'http://localhost:3000/api'
Vue.prototype.$API = {
  user: {
    login: `${API_URL}/users/login`,
    register: `${API_URL}/users/register`
  }
}

const store = new Vuex.Store({


})

new Vue({
  router,
  render: h => h(Navbar)
}).$mount('#nav-bar')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

new Vue({
  render: h => h(Footer)
}).$mount('#footer')
