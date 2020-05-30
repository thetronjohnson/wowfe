import Vue from 'vue'
import App from './App.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'

Vue.use(Buefy)

Vue.config.productionTip = false


new Vue({
  router,
  render: h=>h(Navbar),
}).$mount('#nav-bar')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h=>h(Footer),
}).$mount('#footer')