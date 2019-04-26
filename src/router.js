import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior (to, from, savedPosition) {
	    return { x: 0, y: 0 }
	},
	routes: [{
			path: '/',
			name: 'home',
			component: Home,
			redirct: '/index',
			children: [{
				path: '',
				name: '首页',
				component: Index
			},{
				path: '/fupin',
				name: '旅游扶贫',
				component: () =>
					import('./views/Fupin.vue')
			},{
				path: '/sifang',
				name: '一机知四方',
				component: () =>
					import('./views/Sifang/Sifang.vue')
			},{
				path: '/sifang/:id',
				name: '知四方详情',
				component: () =>
					import('./views/Sifang/SfDetail.vue')
			},{
				path: '/yougz',
				name: '一机游贵州',
				component: () =>
					import('./views/Yougz.vue')
			},{
				path: '/ec',
				name: '扶贫电商',
				component: () =>
					import('./views/Ec.vue')
			},{
				path: '/news',
				name: '栏目导航',
				component: () =>
					import('./views/News.vue'),
				children: [
					{
						path: '',
						name: '栏目导航新闻',
						component: () =>
							import('./components/NewItem.vue')
					},
					{
						path: '/imgItem',
						name: '栏目导航图片',
						component: () =>
							import('./components/ImgItem.vue')
					},
				]
			},{
				path: '/newDetail/:id',
				name: '新闻详情页',
				component: () =>
					import('./views/NewDetail.vue')
			},{
				path: '/imgDetail/:id',
				name: '图片详情',
				component: () =>
					import('./views/ImgDetail.vue')
			},{
				path: '/movDetail/:id',
				name: '视频详情',
				component: () =>
					import('./views/MovDetail.vue')
			},{
				path: '/ziyuan',
				name: '扶贫资源对接',
				component: () =>
					import('./views/Ziyuan.vue')
			},{
				path: '/qiye',
				name: '扶贫示范企业',
				component: () =>
					import('./views/Qiye.vue')
			}]
		},

	]
})