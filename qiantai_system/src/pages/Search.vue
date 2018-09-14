<template>
	<section>
		<div class="con-top">
			 <span  class="backIcon" @click="backIcon"><icon name="angle-left" scale="2" style="height: 40px;"></icon></span>
			<mt-search
  v-model="value"
  cancel-text=""
  placeholder="搜索">
</mt-search>
<span class="searchBtn">搜索</span>
		</div>
		<div class="search-record">
			<div class="history-search">
			<h2>历史搜索</h2>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
		</div>
		<div class="hot-search">
			<h2>热门搜索</h2>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
			<mt-badge size="normal"  color="#888">css</mt-badge>
		</div>
		</div>
	</section>
	
</template>

<script>
	export default {
		name: 'Search',
		data() {
			return {
				value:'',
				selectbg:1
			}
		},
		methods: {
			backIcon:function(){
				this.$router.push({
					path: '/home'
				});
			},
			clickSec:function(index){
				this.selectbg=index;
			}
		},
		mounted() {
			
		}
	}
</script>

<style>
	.con-top{
		height: 40px;
		line-height: 40px;
		background: #58b7ff;
	}
	.backIcon{
		color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		display: inline-block;
		width: 50px;
		text-align: center;
		height: 40px;
		line-height: 40px;
	}
	.mint-search{
		/*float: left;*/
		height: 40px;
		width: 100%;
		padding: 0 50px;
		box-sizing: border-box;
	}
	.mint-search .mint-searchbar{
		margin-top: 2px;
		padding: 0;
	}
	.mint-searchbar-cancel{
		display: none;
	}
	.mint-searchbar-inner .mintui-search {
    font-size: 20px;
}
.searchBtn{
	color: #fff;
	position: absolute;
		top: 0;
		right: 0;
	display: inline-block;
	height: 40px;
	text-align: center;
	line-height: 40px;
	width: 50px;
}
.search-con{
	height: 42px;
	background: #fff;
	width: 100%;
	text-align: center;
}
.search-con div{
	width: 30%;
	height: 24px;
	display: inline-block;
	text-align: center;
	margin-top: 9px;
	border: 1px solid #666;
}
.search-record{
	padding: 1rem 3%;
}
.search-record h2{
	font-size: 0.8rem;
	margin-bottom: 0.3rem;
}
.search-record span{
	margin-right: 0.3rem;
	margin-bottom: 0.3rem;
}
	.search-con	.clickred{
			    border-color: #ab0923;
    			color: #ab0923;
		}
		.history-search{
			min-height: 5rem;
		}
		.hot-search{
			margin-top: 0.5rem;
			min-height: 5rem;
		}
</style>