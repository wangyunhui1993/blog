<template>
	<div class="content">
		<div>
       <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center"  v-for="(item, index) in playerNavList"  @on-item-click="clickTab(item)" :key="index">{{item.name}}</tab-item>
      </tab>
      <!-- <swiper v-model="index" height="230px" :show-dots="false">
        <swiper-item v-for="(item, index) in playerNavList" v-if="item.parentID===0"  :key="index">
          <div class="tab-swiper vux-center">
			  <grid :cols="3" :show-lr-borders="false">
				  <grid-item  v-for="(itemer, index) in playerNavList" v-if="itemer.parentID===item.id" @click.native="clickGridItem(itemer)" :key="index">
					<span   class="grid-center">{{itemer.name}}</span>
				  </grid-item>
				</grid>
		  </div>
        </swiper-item>
      </swiper> -->
	  <div class="movieList">
		   <grid :cols="2">
      <grid-item :label="item.title" style="position: relative;"  @click.native="showEveryItem(item)"   v-for="(item, index) in playerMovieList" :key="index">
		  <div class="caption">{{item.caption}}</div>
        <img slot="icon" :src="item.img">
      </grid-item>
    </grid>
	  </div>
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
	</div>
</template>
<script>
	import {
		queryPlayerNav,
		queryMovie,
		queryAllItem
	} from "../js/api"
	export default {
		name: 'Menu',
		data() {
			return {
				showPositionValue:false,
				err_msg:'',
				playerNavList:[],
				playerMovieList:[],
				selectedTab:0,
				index:0,
				show:false,
				allItem:[],
				url:'https://v.qq.com',
				showLading:false,
			}
		},
		methods: {
			 log (str) {
      console.log(str)
    },
			clickGridItem(item){
				console.log(item);
				this.getQueryMovie(item.url);
			},
			clickTab(item){
				this.selectedTab=item.id;
				this.getQueryMovie(item.url);
			},
			showEveryItem(item){
				
				console.log(item);
				this.getQueryAllItem(item.href,item);
			},
			getQueryAllItem(url,item) {
				this.showLading=true;
				//获取每一集
				let info = {url:url};
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
			getPlayerNav() {
				this.showLading=true;
				//获取分类
				let info = {};
				queryPlayerNav(info).then(data => {
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
						
						this.playerNavList = list;
						this.getQueryMovie(list[0].url);
						console.log(this.playerNavList);
					}
				});
			},
			getQueryMovie(url) {
				this.showLading=true;
				//获取播放列表
				let info = {url:url};
				queryMovie(info).then(data => {
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
						
						this.playerMovieList = list;
						this.showLading=false;
						console.log(this.playerMovieList);
					}
				});
			},
			player() {
				var hash = window.location.hash;
				// var search=window.location.search;
				// search=search.substr(1);
				hash = hash.substr(1);
				console.log(this.$router);
				console.log(this.url);
				this.$router.push({
					path: hash,
					query: {
						url: this.url,
					}
				});
				this.$refs.iframe.src = this.base + this.url;
			},
			getMovieList(){
				
			},
		},
		mounted() {
			
			this.getPlayerNav();
			
			
		},
		created() {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.content{
		/* height: 100vh; */
	}
	.weui-grid{
		padding: 10px 10px;
	}
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

</style>
<style>
	.movieList .weui-grid__icon{
		width: auto;
		height: auto;
	}
</style>
