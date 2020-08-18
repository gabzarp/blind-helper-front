import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueSession from 'vue-session'
import VueTheMask from 'vue-the-mask'

Vue.use(VueTheMask)
Vue.use(VueSession)
Vue.use(VueRouter)

Vue.prototype.axios = axios

import Login from './components/user/Login.vue'
import Signup from './components/user/Signup.vue'
import AssociateHelper from './components/user/AssociateHelper.vue'
import Contacts from './components/contact/Contacts.vue'
import CreateContact from './components/contact/CreateContact.vue'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Login },
  { path: '/registrar', component: Signup },
  { path: '/contatos', component: Contacts },
  { path: '/criar-contato', component: CreateContact },
  { path: '/associar', component: AssociateHelper }
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
