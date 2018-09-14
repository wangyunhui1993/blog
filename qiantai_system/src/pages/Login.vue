<template>
	<section>
			<mt-header title="永沁福利" fixed style="height: 45px;background: #c7000a;font-size: 18px;    font-weight: 400;">
			<router-link to="/home" slot="left">
			<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="content">
			 <mt-navbar v-model="selected" style="top: 45px;" value="1" fixed>
  <mt-tab-item id="1">登录</mt-tab-item>
  <mt-tab-item id="2">注册</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-field label="" placeholder="手机号" v-model="username"></mt-field>
    <mt-field label="" placeholder="密码" type="password" v-model="password"></mt-field>
    <div class="forgetPwd"><router-link to="/editPwd" >
			忘记密码
			</router-link></div>
    <mt-button type="default" style="margin: 20px 0;"  size="large">登录</mt-button>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    
    
    <mt-field label="" placeholder="请输入手机号" v-model="username"></mt-field>
			<mt-field label="" placeholder="请输入新密码" v-model="username"></mt-field>
			<mt-field label="" placeholder="图片验证码" v-model="captcha">
  <img src="http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkJkHnicIuroMeMr72oUh9UaboR5A8Dd5iagpRySe9dn7zf7O0iafuDuE56wREJl9h8dZx47c2OmV4g/0" height="45px" width="100px">
</mt-field>
	<mt-field label="" placeholder="短信验证码" v-model="captcha">
  <mt-button type="default"  size="small">获取验证码</mt-button>
</mt-field>
<mt-button type="default" style="margin-top: 20px;"  size="large">重置</mt-button>
    
  </mt-tab-container-item>
</mt-tab-container>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
			selected: '1'
			}
		},
		methods: {


		},
		mounted() {

		}
	}
</script>

<style scoped>
		.content{
			width: 98%;
		margin: 100px auto 0;
		/*background: #fff;*/
		
	}
	.mint-tab-container-wrap{
		/*padding: 0 10px;*/
	}
	.forgetPwd{
		height: 20px;
		padding: 0 10px;
		margin-top:5px ;
	}
	.forgetPwd a{
		text-decoration: none;
		float: right;
		font-size: 12px;
		color: #6aa4e8;
	}
</style>