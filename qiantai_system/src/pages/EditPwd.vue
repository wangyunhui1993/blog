<template>
	<section>
			<mt-header title="修改密码" fixed style="height: 45px;background: #c7000a;font-size: 18px;    font-weight: 400;">
			<router-link to="/mine" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="content">
			<mt-field label="" placeholder="请输入手机号" v-model="username"></mt-field>
			<mt-field label="" placeholder="请输入新密码" v-model="username"></mt-field>
			<mt-field label="" placeholder="图片验证码" v-model="captcha">
  <img src="http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkJkHnicIuroMeMr72oUh9UaboR5A8Dd5iagpRySe9dn7zf7O0iafuDuE56wREJl9h8dZx47c2OmV4g/0" height="45px" width="100px">
</mt-field>
	<mt-field label="" placeholder="短信验证码" v-model="captcha">
  <mt-button type="default"  size="small">获取验证码</mt-button>
</mt-field>
<mt-button type="default" style="margin-top: 20px;"  size="large">重置</mt-button>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'EditPwd',
		data() {
			return {

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
		margin: 55px auto 0;
		border-radius:3px ;
		
	}
</style>