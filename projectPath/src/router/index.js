import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Player from '@/components/Player'
import Class from '@/components/Class'

Vue.use(Router)

export default new Router({
  routes: [
		{
		  path: '/',
		  name: 'home',
		  component: Home,
			children:[
				 {
				  path: '/class',
				  name: 'class',
				  component: Class
				},
				{
				  path: '/player',
				  name: 'player',
				  component: Player
				}
			]
		},
	 
  ]
})
