// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

const proClubsApi = require('fifa-api-proclubs')
proClubsApi.club.platformType('PS4')

const resp = await club.getClubInfo('6703918');
console.log(resp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
