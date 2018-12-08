// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload' //图片懒加载
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/vuex/store'

Vue.config.productionTip = false
Vue.use(Elementui)

Vue.use(VueLazyLoad,{ //图片懒加载
    error:'',
    loading:'',
		preLoad:1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
