
export default blogRouter=[
	{
	  path: '/b',
	  name: 'home',
	  component: Home,
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