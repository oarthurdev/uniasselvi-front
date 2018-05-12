// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
import App from './App'
import router from './router'
import EventBus from './lib/eventBus.js'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost/painelgmgothicpt'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

axios.interceptors.request.use(function (config) {
  const hash = localStorage.getItem('token')
  if (hash) {
    config.headers = config.headers || {}
    config.headers['Authorization'] = hash
  } else {
    // window.location.href = '/login'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
