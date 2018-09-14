	import Vue from 'vue'
	import Router from 'vue-router'
	import store from './../store'
	Vue.use(Router)
	// 懒加载方式，当路由被访问的时候才加载对应组件
	const Home = resolve => require(['@/pages/Home1'], resolve)
	const Nav = resolve => require(['@/pages/Nav/Nav'], resolve)
	const Login = resolve => require(['@/pages/Login'], resolve)
	const NotFind = resolve => require(['@/pages/notFind'], resolve)
	
	/*文章管理*/
	const BMedit = resolve => require(['@/pages/blog_manager/edit'], resolve)
	const BMquery = resolve => require(['@/pages/blog_manager/query'], resolve)
	const BMdetail = resolve => require(['@/pages/blog_manager/detail'], resolve)
	
	
	
	




	import { SStorage } from "../js/LStorage"
	// 定义并实例化路由
	let router = new Router({
		/*mode: 'history',*/
		base: __dirname,
		routes: [
		{
				path: '/',
				menuShow: false,
				component: Login
		},
		{
				path: '/login',
				name: '登录',
				menuShow: false,
				component: Login
		},
			{
				path: '/',
				component: Home,
				menuShow: true,
				children: [
					{
						path: '/blog_manager',
						name: '文章管理',
						component: Nav,
						menuShow: true,
						children: [
							{ path: '/blog_manager/query', component: BMquery, name: '文章查看', menuShow: true },
							{ path: '/blog_manager/edit', component: BMedit, name: '文章发表', menuShow: true },
							{ path: '/blog_manager/detail', component: BMdetail, name: '文章详情', menuShow: true },
						]
					},
					
					
					

					
					
					
				]
			},
			
			
			
			
			{ path: '*', menuShow: false, component: NotFind }
		]
	});
	

	router.beforeEach((to, from, next) => {
		console.log(to);
//		if(to.path == '/login') {
//			window.sessionStorage.removeItem('access-user');
//			router.app.$store.commit('keepAdminUserInfo',{});
//			next();
//		} else {
//			if(router.app.$store.state.adminUserInfo.userName){  //判断$store是否有登录信息
//					next();
//				
//			}else{
//				if(!SStorage.getItem('access-user')){ //判断本地是否有登录信息
//					next({path: '/login'});
//				}else{
//					router.app.$store.commit('keepAdminUserInfo',SStorage.getItem('access-user'));
//					next();
//				}
//			}
			
			
			
			
			
			
			
			
			
			
			
			
			
//			let user = SStorage.getItem('access-user');
////			let user = JSON.parse(window.sessionStorage.getItem('access-user'));
//			if(!user) {
//				next({
//					path: '/login'
//				});
//			} else {
////				router.app.$store.commit('keepAdminUserInfo',SStorage.getItem('access-user'));
//				next();
//			}
			next();
			
			
			
			
			
			
//		}
	});
	export default router