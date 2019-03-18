import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Movie from '@/pages/Movie'
import Finding from '@/pages/Finding'
import Mine from '@/pages/Mine'
import Robot from '@/pages/Robot'
import ProductList from '@/pages/ProductList'
import ArticleDetail from '@/pages/ArticleDetail'
import Search from '@/pages/Search'
import EditPwd from '@/pages/EditPwd'
import Login from '@/pages/Login'
import NotFind from '@/pages/Notfind'

Vue.use(Router)

export default new Router({
  routes: [
  {
     path: '/',
	menuShow: false,
	redirect: '/home'
    },
    {
      path: '/home',
      name: '首页',
      menuShow: true,
      iconCls:'home',
      component: Home
    },
    {
      path: '/movie',
      name: '电影',
      iconCls:'reorder',
      menuShow: true,
      component: Movie
    },
    {
      path: '/find',
      name: '发现',
      iconCls:'paper-plane-o',
      menuShow: true,
      component: Finding
    },
    {
      path: '/mine',
      name: '关于',
      iconCls:'user',
      menuShow: true,
      component: Mine
    },
		
		

    {
      path: '/articleDetail',
      name: '文章详情',
      menuShow: false,
      component: ArticleDetail
    },
     {
      path: '/search',
      name: '搜索',
      menuShow: false,
      component: Search
    },
        {
      path: '/editPwd',
      name: '修改密码',
      menuShow: false,
      component: EditPwd
    },
    {
      path: '/login',
      name: '登录',
      menuShow: false,
      component: Login
    },
		{
			path: '/robot',
			name: '聊天机器人',
			menuShow: false,
			component: Robot
		},
//  ,
//  { path: '*', menuShow: false, component: NotFind }
  ]
})
