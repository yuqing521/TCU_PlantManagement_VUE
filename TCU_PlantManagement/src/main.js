import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/index'

Vue.config.productionTip = false
Vue.use(Vuex);


Vue.prototype.$axios = axios
Vue.prototype.$uploadpath = 'https://www.exiaopin.cn/api/upload'
Vue.prototype.$host = 'https://www.exiaopin.cn/api/'

Vue.component('remote-script', {
  render: function (createElement) {
    return createElement('script', {
      attrs: {
        type: 'text/javascript',
        src: this.src
      }
    })
  },
  props: {
    src: {
      type: String,
      required: true
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
