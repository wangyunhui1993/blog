<template>
	<section class="section-con">
		<mt-header title="关于" style="background: #58b7ff;height: 45px;font-size: 18px;" fixed>
  <router-link to="/home" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
</mt-header>



		 <input type="button" value="切换裁切" @click="canCrop=!canCrop">
    <editor ref="myTextEditor"
            :fileName="'myFile'"
            :canCrop="canCrop"
            :uploadUrl="uploadUrl"
            v-model="content"></editor>
    <div v-html="content"></div>
	

		<tabbar-select></tabbar-select>
	</section>
</template>
<script>
	import { getCategoryList } from "../js/api"
	import editor from '../components/Quilleditor.vue'
	import Tabbar from '@/pages/Tabbar'
	export default {
		name: 'Mine',
		components: {
			'tabbar-select': Tabbar,
			editor
		},
		data() {
			return {
				 canCrop:false,
      /*测试上传图片的接口，返回结构为{url:''}*/
//    uploadUrl:'/api/blog/upload',
uploadUrl:'/api/orgadmin/apitest/company/FileuploadController/upload.jspx',
      content:''
			}
		},
		methods: {
			
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	
</style>