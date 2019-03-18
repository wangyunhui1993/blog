<template>
	<section class="section-con">
		<mt-header title="电影" style="background: #58b7ff;height: 45px;font-size: 18px;" fixed>
  <router-link to="/home" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
</mt-header>
		<div class="form-content">
			<mt-field label="标题" placeholder="请输入标题" v-model="subData.title"></mt-field>
			<mt-field label="内容" placeholder="请输入内容" type="textarea" rows="4" v-model="subData.content"></mt-field>
			<mt-button type="primary"  size="large" @click="submintData">发表</mt-button>
		</div>
		<tabbar-select></tabbar-select> 
	</section>
</template>
<script>
	import { setIssueArticle } from "../js/api"
	import Tabbar from '@/pages/Tabbar'
	import { Toast } from 'mint-ui';
	export default {
		components: {
			'tabbar-select': Tabbar
		},
		data() {
			return {
				subData:{
					title:'',
					content:''
				}
			}
		},
		methods: {
			submintData(){
				setIssueArticle(this.subData).then(data => {
					console.log('传回来的响应信息',data);
					let {
						errCode,
						errMsg
					} = data;
					if(errCode != 0) {
						Toast({
					  message: errMsg,
					  position: 'bottom',
					  duration: 5000
					});
					} else {
						Toast({
						  message: '发表成功',
						  iconClass: 'icon icon-success'
						});
					}
				});
			}
		},
		mounted() {
			
		}
	}
</script>
<style>
	.form-content{
		margin-top: 50px;
	}
</style>