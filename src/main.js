import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/reset.css'
import './assets/css/public.css'
import './assets/css/style.less'

import commonApi from './assets/api/common.js'
Vue.prototype.$commonApi = commonApi

import {$http, httpStack} from './assets/tools/http'
Vue.prototype.$http = $http

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
Vue.component('swiper', swiper)
Vue.component('swiperSlide', swiperSlide)


import './plugins/iview.js'


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	store.commit('setPathName', {name: to.name})
	
	if(httpStack.length !== 0){
		httpStack.forEach((a, i) => {
			a.cancelToken.cancel('中断上个路由所有请求' + (i === (httpStack.length-1) ? '并重置集合' : ''))
		})
	}
	
  	next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
