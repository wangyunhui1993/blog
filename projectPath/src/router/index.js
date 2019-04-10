import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Player from '@/components/Player'
import Class from '@/components/Class'
import Search from '@/components/Search'
Vue.use(Router)

export default new Router({
  routes: [
		{
		  path: '/',
			redirect:'/home/class',
		},
		{
		  path: '/',
		  name: 'home',
		  component: () => import('@/components/Home'),
			isTabBar:true,
			children:[
				 {
				  path: '/home/class',
				  name: '首页',
				  component: Class,
					icon:require('@/assets/icon_nav_article.png')
				},
				{
				  path: '/home/search',
				  name: '搜索',
				  component: Search,
					icon:require('@/assets/icon_nav_button.png')
				},
				{
				  path: '/home/player',
				  name: 'Player',
				  component: Player,
					icon:require('@/assets/icon_nav_cell.png')
				}
			]
		},
  ]
})
