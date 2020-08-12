import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueSession from 'vue-session'

Vue.use(VueSession)
Vue.use(VueRouter)

Vue.prototype.axios = axios

import Login from './components/user/Login.vue'
import Signup from './components/user/Signup.vue'
import Contacts from './components/contact/Contacts.vue'
import CreateContact from './components/contact/CreateContact.vue'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Login },
  { path: '/signup', component: Signup },
  { path: '/contacts', component: Contacts },
  { path: '/create_contact', component: CreateContact }
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
