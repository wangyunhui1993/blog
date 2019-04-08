<template>
	<section class="contentSearch">
		<div>
			<search  v-model="searchValue" position="absolute"
			   @on-cancel="onCancel" :auto-fixed="false" @on-submit="onSubmit" @on-focus="onFocus" @on-blur="onBlur" ref="search" placeholder="请输入电影或电视剧名称"></search>
		</div>
		
		<div class="movieList">
			<div v-if="showSearchRecord && searchRecordList.length" class="searchRecord">
				<div style="font-size:12px">
					历史记录
				</div>
				<div>
					<badge v-for="(item,index) in searchRecordList" :key="index" :text="item" class="searchRecordList" @click.native="clickSearchRecord(item)"></badge>
				</div>
			</div>
			   <grid :cols="2">
		  <grid-item :label="item.title" style="position: relative;"  @click.native="showEveryItem(item)"   v-for="(item, index) in searchList" :key="index">
			  <div class="caption">{{item.type}}</div>
		    <img slot="icon" :src="item.img">
		  </grid-item>
		</grid>
		  </div>
		  <div>
		    <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')">
		      <div class="popup0">
		       <grid :cols="8" :show-lr-borders="false">
		       				  <grid-item  v-for="(item, index) in allItem" :link="'#/home/player?url='+url+item.href" :key="index">
		       					<span class="grid-center">{{item.num}}</span>
		       				  </grid-item>
		       				</grid>
		      </div>
		    </popup>
		  </div>
		<toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="err_msg" position="middle"></toast>
		<loading :show="showLading" text="Loading"></loading>
	</section>
</template>
<script>
	import {
		searchMovie,
		queryAllItem
	} from "../js/api"
	import {
		LStorage
	} from "../js/Storage"
	export default {
		name: 'TabBar',
		data() {
			return {
				searchValue: '',
				showLading:false,
				showPositionValue:false,
				err_msg:'',
				searchList:[],
				show:false,
				allItem:[],
				url:'https://v.qq.com',
				searchRecordList:[],
				showSearchRecord:true,
			}
		},
		methods: {
			onBlur(){
				this.showSearchRecord=false;
			},
			clickSearchRecord(val){
				this.getSearchMovie(val);
			},
			onFocus(){
				this.showSearchRecord=true;
				this.searchRecordList = LStorage.getItem('searchRecord') || [];
			},
			setLStorage(val){
				let searchRecord= LStorage.getItem('searchRecord');
				if(searchRecord instanceof Array){
					searchRecord.unshift(val);
					searchRecord=[...new Set(searchRecord)];
				}else{
					searchRecord=[val];
				}
				LStorage.setItem('searchRecord',searchRecord);
			},
			 log (str) {
			  console.log(str)
			},
			onSubmit() {
				this.getSearchMovie(this.searchValue.trim());
				this.setLStorage(this.searchValue.trim());
			},
			onCancel() {
				console.log('on cancel')
			},
			
			
			getSearchMovie(key) {
				this.showLading=true;
				//获取播放列表
				let info = {keyWord:key};
				searchMovie(info).then(data => {
					console.log('传回来的响应信息', data);
					let {
						err_code,
						err_msg,
						list
					} = data;
					if (err_code !== 0) {
						this.showLading=false;
						this.showPositionValue = true;
						this.err_msg = err_msg;
					} else {
						this.searchList = list;
						this.showLading=false;
						console.log(this.searchList);
					}
				});
			},
			showEveryItem(item){
				
				console.log(item);
				this.getQueryAllItem(item.href,item);
			},
			getQueryAllItem(url,item) {
				this.showLading=true;
				//获取每一集
				let info = {url:url.substr(5,url.length)};
				queryAllItem(info).then(data => {
					console.log('传回来的响应信息', data);
					let {
						err_code,
						err_msg,
						list
					} = data;
					if (err_code !== 0) {
						this.showLading=false;
						this.showPositionValue = true;
						this.err_msg = err_msg;
					} else {
						console.log(list);
						if(list.length===0){
							this.$router.push({
								path:'/home/player',
								query:{
									url:"https:"+item.href
								}
							});
						}else{
							this.allItem = list;
							this.show=true;
							this.showLading=false;
						}
						
					}
				});
			},
		},

		mounted() {
			this.searchRecordList = LStorage.getItem('searchRecord') || [];
		},
		created() {

		},

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.contentSearch {}
	.caption{
		position: absolute;
		bottom: 40px;
		left: 15px;
		font-size: 12px;
		color: #fff;
	}
	.popup0 {
	padding-bottom:15px;
	height:200px;
	}
	.movieList{
		padding-top: 0;
		min-height: calc(100vh - 155px);
	}
</style>
<style>
	
	.movieList .weui-grid__icon{
		width: auto;
		height: auto;
	}
	.searchRecord{
		padding: 10px;
	}
	.searchRecord .searchRecordList{
		background: #ececec;
		color: #333;
		padding: 5px 10px;
		margin: 0 5px;
	}
</style>
