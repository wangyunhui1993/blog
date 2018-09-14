<template>
	<div id="app">
		<el-row class="container" style="height:100%;overflow: hidden;" :class="cssStyle">

			<el-container  style="height:100%;overflow: hidden;">
  <el-header class="homeHeaderClass">
  				<!--头部-->
			<el-row style='z-index: 1;'>
				<el-col :span="24">
					<div class="grid-content">
						<div class="net-title topFontColor">{{title}}</div>
						<div class="login-info">
							<div class="set">
								<el-dropdown  @command="handleCommand">
								  <span class="el-dropdown-link system">
								    设置<i class="el-icon-caret-bottom el-icon--right"></i>
								  </span>
								  <el-dropdown-menu slot="dropdown" style="font-size: 14px;text-align: center;">
								  	<el-dropdown-item  command="3">个人资料</el-dropdown-item>
								    <el-dropdown-item  command="1">修改密码</el-dropdown-item>
								    <el-dropdown-item command="2">退出</el-dropdown-item>
								  </el-dropdown-menu>
								</el-dropdown>
								<!-- <router-link to="/perInfo" style="color:whitesmoke;">个人信息</router-link> -->
								<!--<a class="exit-ico" href="javascript:void(0);" style="color:whitesmoke;" v-on:click="logout"><i class="el-icon-upload2"></i>退出</a>-->
							</div>
							<ul class="">
								<li style="font-size: 14px;line-height: 70px;" class="topFontColor">{{preTime}}</li>
							</ul>
							<ul class="">
								<li style="margin-right:15px;">
										<div style="height: 70px;font-size: 20px; color: rgb(60, 60, 60); font-weight: bold; line-height:70px;color: #9dccf1;">
											<label style="font-size: 16px;  font-style: italic; font-weight: normal;">欢迎您</label>
											 <span>{{sysUserName}}</span> 
										</div>
								</li>
							</ul>

							<!-- <div class="notice">
								<el-dropdown>
									<span class="el-dropdown-link">
									<el-badge :value="200" :max="99" class="item">
										
										<icon name="bell-o" style="color:rgb(244, 244, 244);" scale="1.2"></icon>
										
									</el-badge>
								</span>
									<el-dropdown-menu slot="dropdown" class='dropdownlist'>
										<el-dropdown-item class="clearfix">评论
											<el-badge class="mark" :value="12" /></el-dropdown-item>
										<el-dropdown-item class="clearfix">评论
											<el-badge class="mark" :value="12" /></el-dropdown-item>
									</el-dropdown-menu>
								</el-dropdown>
							</div> -->
						</div>
					</div>
				</el-col>
			</el-row>
			
  </el-header>
  <el-main style="padding: 0; position: relative; background: #afcfee;">
  	<router-view></router-view>
  </el-main>
</el-container>
			
			
			
			
			<el-dialog title="密码修改" :visible.sync="dialogEditVisible" width="500px">
  <el-form :model="form" label-width="100px" :rules="rules" ref="form">
    <el-form-item label="原始密码" prop="password" :rules="[{ required: true, message: '请输入原始密码', trigger: 'blur'}]">
      <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="newPassword"  :rules="[{ required: true, message: '请输入新密码', trigger: 'blur'}]" >
      <el-input type="password" v-model="form.newPassword" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="newPassword1"  >
      <el-input type="password" v-model="form.newPassword1" auto-complete="off"></el-input>
    </el-form-item>
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogEditVisible = false">取 消</el-button>
    <el-button type="primary" @click="subEditPwd">确 定</el-button>
  </div>
</el-dialog>

<el-dialog title="个人资料" :visible.sync="dialogMyDataVisible" width="500px">
  <el-form :model="myDataForm" label-width="150px">
    <el-form-item label="用户名：">
      {{myDataForm.userName}}
    </el-form-item>
    <el-form-item label="权限：">
      {{myDataForm.roleName}}
    </el-form-item>
    <el-form-item label="真实姓名：">
      {{myDataForm.realName}}
    </el-form-item>
    <el-form-item label="手机号：">
      {{myDataForm.mobile}}
    </el-form-item>
     <el-form-item label="邮箱：">
      {{myDataForm.email}}
    </el-form-item>
     <el-form-item label="最后登录时间：">
      {{myDataForm.lastLogin}}
    </el-form-item>
     <el-form-item label="最后登录IP：">
      {{myDataForm.lastIp}}
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogMyDataVisible = false">确 定</el-button>
  </div>
</el-dialog>
</el-row>
		
		
		
		
		
	</div>

</template>

<script>
	import { bus } from '../bus.js'
	import {formatTime} from '../js/formatTime';
	import {updatePassword,selectAllUser} from '../js/api';
	export default {
		name: 'home',
		data() {
			 var newPassword1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
			return {
				// activeIndex: '',
				sysUserName: '',
				sysUserAvatar: '',
				collapsed: false,
				preTime: '',
				groupName: '',
				roleName: '',
				title: window.g.netName,



			dialogEditVisible:false,
			dialogMyDataVisible:false,
			searchMydata:{
				current:1,
				id:"",
				realName:"",
				roleId:"",
				size:1,
				userName:this.$store.state.adminUserInfo.userName,
			},
			myDataForm:{
				
			},
			form:{
				type:"1",
				username:this.$store.state.adminUserInfo.userName,
				password:"",
				newPassword:"",
				newPassword1:"",
				man:this.$store.state.adminUserInfo.id,
			},
			rules:{
				newPassword1:[
					 { validator: newPassword1, trigger: 'blur' },
					  { required: true, message: '请再次输入新密码', trigger: 'blur' },
				],
			},
			cssStyle:"write",
			}
		},
		methods: {
			handleCommand(command){
				console.log(command);
				switch (command){
					case '1':
						this.dialogEditVisible=true;
					break;
					case '2':
					this.logout();
					break;
					case '3':
					this.showMydata();
					break;
				}
			},
			logout: function() {
				this.$confirm('确认退出吗?', '提示', {
					type: 'info'
				}).then(() => {
					sessionStorage.removeItem('access-user');
					this.$router.push({path:"/login"});
				}).catch((e) => {
				});
			},

			single(key, keyPath) {
				this.$router.push(key)
				//            this.$router.go(0);
			},
			/*提交修改密码*/
			subEditPwd(){
				 this.$refs.form.validate((valid) => {
          if (valid) {
            this.editPwd();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
			},
			/*显示个任务资料页面*/
			showMydata(){
				selectAllUser(this.searchMydata).then(data => {
						let {
							errMsg,
							errCode,
							value,
							extraInfo,
							success
						} = data;
						if(success) {
							console.log(data);
							this.myDataForm=value[0];
							this.dialogMyDataVisible=true;
						} else {
							console.log(data);
							this.$message({
								message: errMsg,
								type: 'error'
							});
						}
					});
			},
			/*修改密码*/
			editPwd(){
				updatePassword(this.form).then(data => {
						let {
							errMsg,
							errCode,
							value,
							extraInfo,
							success
						} = data;
						if(success) {
							console.log(data);
							this.$message({
								message: errMsg,
								type: 'success'
							});
							this.dialogEditVisible=false;
						} else {
							console.log(data);
							this.$message({
								message: errMsg,
								type: 'error'
							});
						}
					});
			},
		},

		created() {
			var user = this.$store.state.adminUserInfo;
			if(user) {
				this.sysUserName = user.userName || '';
			}
			this.preTime=formatTime(new Date());
			setInterval(()=>{
				this.preTime=formatTime(new Date());
			}, 1000);
		},
		computed: {
			onRoutes() {
				//              return this.$route.path.replace('/login','');
			}
		},
		filters: {
			//		  //根据子路径找到父路径
			filterParentPath(childPath) {
				let parentPath = "/" + childPath.match(/\/(\S*)\//)[1];
				return parentPath;
				//		  	let _this=this;
				//			  let path = "/home";//default
				//			  for(let i=0; i < _this.$router.options.routes.length; i++) {
				//				  if(_this.$router.options.routes[i].menuShow && _this.$router.options.routes[i].children.length > 0) {
				//					for(let j=0; j< _this.$router.options.routes[i].children.length; j++) {
				//						if(childPath.indexOf(_this.$router.options.routes[i].children[j].path) != -1) {
				//							path = _this.$router.options.routes[i].children[j].path;
				//							break;
				//						}
				//					}
				//				  }
				//			  }
				//			  return path;
			},
		}

	}
</script>

<style>
	.el-row {
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.blue .bg-dark-blue {
		background: #1D8CE0;
	}
	
		.grey .bg-dark-blue {
		background: #101010;
	}
	
	.green .bg-dark-blue {
		background: #00CA79;
	}
	
	.write .bg-dark-blue {
		background: rgb(245, 245, 245);
	}
	
	
	
	
	
	
	
	
	
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		min-height: 70px;
		padding: 0 20px;
		height: 100%;
		overflow: hidden;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	
	.el-menu {
		border-radius: 0;
	}
	
	.net-title {
		font-size: 22px;
		font-weight: bolder;
		
		line-height: 70px;
		float: left;
		padding-left: 20px;
	}
	.topFontColor{
		color: #fff;
	}
	
	.login-info {
		float: right;
		height: 70px;
		margin-right: 15%;
	}
	
	.login-info ul {
		list-style: none;
		float: right;
	}
	
	.set {
		/*position:absolute;right:0;top:70px;z-index:1;*/
		margin-left: 10px;
		height: 70px;
		line-height: 70px;
		font-size: 14px;
		margin-right: 10px;
		float: right;
		
	}
	.system:hover{
		cursor:pointer;
	}
	
	.set a {
		padding: 0 15px;
	}
	
	.exit-ico i {
		transform: rotate(90deg);
		margin-right: 5px;
	}
	

	
	a:-webkit-any-link {
		color: inherit;
		cursor: auto;
		text-decoration: none;
	}
	

	
	.content-wrapper {
		overflow-y: scroll;
		height: 100%;
	}
	
	.el-table .cell {
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	
	.notice {
		height: 70px;
		float: right;
		width: 45px;
	}
	
	.el-dropdown {
		line-height: 70px;
		color: #fff;
	}
	
	.el-badge .el-badge__content {
		top: 10px;
	}
	
	.dropdownlist {
		/*left: 744px !important;
		top: 55px!important;*/
		border-radius: 5px;
	}
	
	
	
	
	
	
	
	
	
	.homeHeaderClass{
		height: 70px !important;
		background: url(../assets/images/header.jpg);
		background-size: cover;
	}
</style>