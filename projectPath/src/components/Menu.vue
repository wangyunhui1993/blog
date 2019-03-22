<template>
	<div class="content">
		<div>
       <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="selectedTab === item.id" v-for="(item, index) in playerNavList" v-if="item.parentID===0" @on-item-click="clickTab(item.id)" :key="index">{{item.name}}</tab-item>
      </tab>
      <swiper v-model="index" height="300px" :show-dots="false">
        <swiper-item v-for="(item, index) in playerNavList" v-if="item.parentID===0"  :key="index">
          <div class="tab-swiper vux-center">
			  <grid :cols="3" :show-lr-borders="false">
				  <grid-item  v-for="(itemer, index) in playerNavList" v-if="itemer.parentID===item.id" :key="index">
					<span  @click="clickGridItem(itemer)" class="grid-center">{{itemer.name}}</span>
				  </grid-item>
				</grid>
		  </div>
        </swiper-item>
      </swiper>
    </div>
		<toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="err_msg" position="middle"></toast>
	</div>
</template>
<script>
	import {
		queryPlayerNav
	} from "../js/api"
	export default {
		name: 'Menu',
		data() {
			return {
				showPositionValue:false,
				err_msg:'',
				playerNavList:[],
				selectedTab:0,
				index:0,
			}
		},
		methods: {
			clickGridItem(item){
				console.log(item);
			},
			clickTab(id){
				this.selectedTab=id;
				console.log(id);
			},
			getPlayerNav() {
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
						this.showPositionValue = true;
						this.err_msg = err_msg;
					} else {
						
						this.playerNavList = list;
						console.log(this.playerNavList);
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
		height: 100vh;
	}
</style>
