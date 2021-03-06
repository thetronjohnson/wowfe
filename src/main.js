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

let API_URL = 'http://localhost:3000/api'
if (window.location.host.indexOf('whatsourweather') > 0) {
  API_URL = 'https://whatsourweather.herokuapp.com/api'
}

Vue.prototype.$API = {
  user: {
    check: `${API_URL}/users/check`,
    login: `${API_URL}/users/login`,
    register: `${API_URL}/users/register`
  },
  gauge: {
    getAll: `${API_URL}/gauge/getAll`,
    getMine: `${API_URL}/gauge/getMine`,
    add: `${API_URL}/gauge/add`
  },
  rain: {
    add: `${API_URL}/rain/add`,
    measurements: {
      hours24: `${API_URL}/rain/measurements/24Hours`,
      mine: `${API_URL}/rain/measurements/mine`
    }
  }
}

const store = new Vuex.Store({
  state: {
    token: '',
    user: {
      name: '',
      username: ''
    },
    loggedIn: false
  },
  mutations: {
    init (state) {
      // Check if the ID exists
      if (window.localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(window.localStorage.getItem('store')))
        )
      }
    },

    setToken (state, value) {
      state.token = value
      state.loggedIn = true
    },

    logOut (state) {
      state.token = ''
      state.loggedIn = false
    },

    setUser (state, payload) {
      state.user = payload
    }
  }
})

store.commit('init')

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  window.localStorage.setItem('store', JSON.stringify(state))

  if (state.token) {
    axios.defaults.headers.common.Authorization = state.token
  }
})

if (store.state.token) {
  axios.defaults.headers.common.Authorization = store.state.token

  axios.get(Vue.prototype.$API.user.check).catch((e) => {
    if (e.response.status === 401) {
      store.commit('logOut')
      router.push('/')
    }
  })
}

new Vue({
  router,
  store,
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
