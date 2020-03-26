<template>
	<div style="position: absolute;width: 100%;height: 100%;">
		<el-container style="height: 100%;">
			<el-header class="headerClass">
				<template v-for="(child, index) in $router.options.routes" v-if="child.menuShow">
					<ul class="topNav">
						<li v-for="(item,index) in child.children" :key='item.children[0].path' @click="topNavBtn(index,item.children,item.name)" :class="activeIndex==index?'activeBg':''"> {{ item.name }}
						</li>
					</ul>
				</template>
			</el-header>
			<el-container>
				<el-aside width="180px" style="padding-top: 10px;padding-left: 10px;position: relative;">
					<h5 style="height: 40px;text-align: center;line-height: 40px;font-weight:bold ;background: #1a77cf;color: #fff;font-size: 18px;"><i class="el-icon-tickets">菜单列表</i></h5>
					<div style="height: calc(100% - 50px);position: absolute;width: calc(100% - 10px);    background: #5da4e5;">
						<ul class="leftNav">
							<li v-for="(item,index) in leftNavList"  v-if="item.menuShow"  :class="activeLeftIndex==index?'activeLeftBg':''" @click="leftNavBtn(index,item.path,item.name)"> {{ item.name }}

							</li>
						</ul>
					</div>
				</el-aside>
				<el-main style="padding: 10px;position: relative;">
					<!--右侧内容区-->
					<section style="position: absolute;height: calc(100% - 50px);width: calc(100% - 20px);">
						<el-row>
							<el-breadcrumb separator-class="el-icon-arrow-right">
								<el-breadcrumb-item v-for="(item,index) in breadcrumbNav" :key="index">{{item}}</el-breadcrumb-item>
							</el-breadcrumb>
						</el-row>
						<transition name="fade" mode="out-in">
							<section class="rightcontent">
									<router-view></router-view>
							</section>
						</transition>
					</section>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				systemShow: true,
				secnav: [],
				bNav: '',
				isCollapse: false,
				enableMenuIcon: false,
				backgroundColor: "#1D8CE0",
				textColor: "#fff",
				activeTextColor: "#ccc",
				activeIndex: "",
				activeLeftIndex: "",
				leftNavList: [],
				breadcrumbNav:[],
			};
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.breadcrumbNav=[];
				var vmRouter = vm.$router.options.routes;
				var path = window.location.hash;
				path = path.substring(1);
				console.log(path);
				for(var i = 0; i < vmRouter.length; i++) {
					if(vmRouter[i].menuShow == true) {
						for(var j = 0; j < vmRouter[i].children.length; j++) {
							var firPath = vmRouter[i].children[j];
							console.log(firPath.path.split('/')[1]);
							console.log(path.split('/')[1]);
							if(firPath.path.split('/')[1] === path.split('/')[1]) {
								vm.activeIndex = j;
								vm.breadcrumbNav.push(firPath.name);
								vm.leftNavList = firPath.children;
								break;
							}
						}
						break;
					}
				}
				for(var i = 0; i < vm.leftNavList.length; i++) {
					if(vm.leftNavList[i].path === path) {
						vm.breadcrumbNav.push(vm.leftNavList[i].name);
						vm.activeLeftIndex = i;
						break;
					}
				}
			})
		},
		mounted() {},
		methods: {
			topNavBtn(index, path,name) {
				this.breadcrumbNav=[];
				this.breadcrumbNav.push(name);
				this.breadcrumbNav.push(path[0].name);
				this.activeIndex = index;
				this.$router.push(path[0].path);
				this.leftNavList = path;
				this.activeLeftIndex = 0;
				console.log(path);
			},
			leftNavBtn(index, path,name) {
				this.activeLeftIndex = index;
				this.$router.push(path);
				this.breadcrumbNav.splice(1,1,name)
				console.log(index, path);
			},
		}
	}
</script>
<style>
	.el-breadcrumb {
		line-height: 50px;
		padding-left: 15px;
	}
	
	.rightcontent {
		width: 100%;
		height: calc(100% - 10px);
		background: #fff;
		margin: 0;
		box-sizing: border-box;
		/*overflow-y: scroll;*/
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
		padding-left: 0;
	}
	
	.main {
		height: 100%;
		padding-top: 60px;
		box-sizing: border-box;
		position: absolute;
		top: 0;
		;
		left: 0;
	}
	
	.headerClass {
		padding: 0;
		height: 45px !important;
		background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1), rgba(0, 255, 0, 0));
	}
	
	.topNav {
		margin-top: 3px;
		list-style: none;
		height: 42px;
		margin-left: 10px;
	}
	
	.topNav li {
		float: left;
		line-height: 42px;
		padding: 0 10px;
		color: #4D75A6;
		font-size: 14px;
		background: url(../../assets/images/nav-line.png) no-repeat left center;
	}
	
	.topNav li:first-child {
		background: none;
	}
	
	.topNav li:hover {
		border-radius: 3px;
		background: url(../../assets/images/nav-focused.png) no-repeat center;
		background-size: cover;
		color: #fff;
		cursor: pointer;
	}
	
	.headerClass {
		border-bottom: 1px solid #0099FF;
	}
	
	.headerClass .topNav .activeBg {
		border-radius: 3px;
		background: url(../../assets/images/nav-focused.png) no-repeat center;
		background-size: cover;
		color: #fff;
	}
	
	.leftNav {
		list-style: none;
	}
	
	.leftNav li {
		height: 42px;
		line-height: 42px;
		padding-left: 20px;
		box-sizing: border-box;
		color: #fff;
		font-size: 14px;
		/*float: left;*/
	}
	
	.leftNav li:hover {
		cursor: pointer;
		/*float: left;*/
	}
	
	.activeLeftBg {
		background: #0099FF;
	}
	
	.el-breadcrumb__separator {
		color: #606266;
	}
	
	.el-breadcrumb {
		line-height: 30px;
	}
</style>