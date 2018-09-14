<template>
	<el-col :span="24" class="main" :class="cssStyle">
		<!--左侧导航-->
		<aside :class="collapsed?'aside64':'aside160'">
			<div class="menu-toggle sidebar-open-button" @click.prevent="collapse"  v-if="enableCollapse">
				<i class="iconfont icon-menufold" v-show="!collapsed"></i>
				<i class="iconfont icon-menuunfold" v-show="collapsed"></i>
			</div>
			<template v-for="(child, index) in $router.options.routes" v-if="child.menuShow">
				<el-menu :background-color="backgroundColor" :text-color="textColor" :active-text-color="activeTextColor" :default-active="$route.path" unique-opened class="el-menu-vertical-demo"  mode="horizontal"  theme="dark" @select='secPath' :collapse="isCollapse">
					<el-submenu v-for="children in child.children" v-if="children.menuShow && children.children.length>1" :index='children.path' :key='children.path'>
						<template slot="title">
							<i :class="children.iconCls" v-if="enableMenuIcon"></i>
							<span slot="title">{{children.name}}</span>
						</template>
						<el-menu-item v-for="secNav in children.children" v-if="secNav.menuShow" :index='secNav.path' :key='secNav.path' style='padding-left:20px;'>{{secNav.name}}</el-menu-item>
					</el-submenu>
					<el-menu-item v-else-if='children.menuShow && children.children.length==1' :index='children.children[0].path' :key='children.children[0].path'>
						<i :class="children.iconCls" v-if="enableMenuIcon"></i>
						<span slot="title">{{children.name}}</span>
					</el-menu-item>
				</el-menu>
			</template>

		</aside>
		<!--右侧内容区-->
		<section :class="collapsed?'content-container64':'content-container160'">
			<div class="grid-content bg-purple-light">
				<el-col :span="24" class="content-wrapper">

					<!--<el-breadcrumb separator="/" style='font-weight: 700; font-size:14px;'>
						<el-breadcrumb-item :to="{ path: bNav.path }">{{bNav.name}}</el-breadcrumb-item>
					</el-breadcrumb>-->
					<transition name="fade" mode="out-in">
						<section class="rightcontent">
							<router-view></router-view>
						</section>
					</transition>
				</el-col>
			</div>
		</section>
	</el-col>
</template>

<script>
	export default {
		data() {
			return {
				enableCollapse: true,
				enableMenuIcon: true,

				secnav: [],
				bNav: '',

				collapsed: false,
				isCollapse: false,
				content: 'content-container160',
				aside: 'aside160',
				system: false,
				cssStyle:"",
				
				backgroundColor:"#545c64",
				textColor:"#fff",
				activeTextColor:"#ffd04b",
			};
		},

		beforeRouteEnter(to, from, next) {
			next(vm => {
				var vmRouter = vm.$router.options.routes;
				for(var i = 0; i < vmRouter.length; i++) {
					if(vmRouter[i].menuShow == true) {
						for(var j = 0; j < vmRouter[i].children.length; j++) {
							var firPath = vmRouter[i].children[j];
							if(to.path.indexOf(firPath.path) == 0) {
								vm.secnav = vmRouter[i].children[j].children;
								vm.bNav = firPath;
								break;
							}

						}

						break;
					}
				}
			})

		},
		mounted() {

		},
		methods: {
			secPath: function(key, keyPath) {
				this.$router.push(key)
			},
			collapse: function() {
				this.collapsed = !this.collapsed;
				this.isCollapse = !this.isCollapse;
			},
		}
	}
</script>
<style>
	.el-breadcrumb {
		line-height: 50px;
		padding-left: 15px;
	}
	
	.content-container160 {
		position: absolute;
		top: 0;
		padding-top: 60px;
		box-sizing: border-box;
		/*background-color: #f1f2f7;*/
		/*background-color: #545c64;*/
		border-width: 2px;
		right: 0;
		left: 160px;
		height: 100%;
		overflow: hidden;
	}
	
	.content-container64 {
		position: absolute;
		top: 0;
		padding-top: 60px;
		box-sizing: border-box;
		/*background-color: #f1f2f7;*/
		/*background-color: #545c64;*/
		border-width: 2px;
		right: 0;
		left: 64px;
		height: 100%;
		overflow: hidden;
	}
	
	.aside160 {
		width: 160px;
	}
	
	.aside64 {
		width: 64px;
	}
	
	.el-menu-vertical-demo {
		/*width: 160px !important;*/
		transition: width 0s;
		border-right: none;
	}
	
	.el-submenu .el-menu-item {
		padding-left: 40px !important;
		min-width: auto;
	}
	
	.rightcontent {
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		background: #fff;
		margin: 0;
	}
	
	.rightcontent:after {
		content: '.';
		height: 0;
		width: 0;
		clear: both;
		visibility: hidden;
	}
	
	.rightcontent {
		zoom: 1
	}
	
	.grid-content {
		padding: 0;
	}
	
	.sysNone {
		display: none;
	}
	
	.content-wrapper {
		overflow-y: inherit;
	}
	.sidebar-open-button:hover{
		cursor: pointer;
	}
	.sidebar-open-button{
		color: #fff;background: #4A5064;line-height: 30px; width: 100%;text-align: center;
	}
	
	
	
	
		aside {
		height: 100%;
		position: absolute;
		top: 0;
		/*background: #324057;*/
		background:#545c64;
		padding-top: 60px;
		box-sizing: border-box;
	}	
	aside .el-menu-item:hover {
		background: #48576a;
	}
</style>