import Vue from 'vue'
import App from './App.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'

Vue.use(VueAxios, axios)
Vue.use(Buefy)

Vue.config.productionTip = false

const API_URL = 'http://localhost:3000/api'
Vue.prototype.$API = {
  user: {
    login: `${API_URL}/users/login`,
    register: `${API_URL}/users/register`
  }
}

new Vue({
  router,
  render: h => h(Navbar)
}).$mount('#nav-bar')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

new Vue({
  render: h => h(Footer)
}).$mount('#footer')
