import Vue from 'vue'
import App from './App.vue'
import loading from './loading.js'
import './icons'
Vue.config.productionTip = false

//全局注册组件
Vue.prototype.$loading = loading //this.$loading.show()
new Vue({
  render: h => h(App),
}).$mount('#app')
