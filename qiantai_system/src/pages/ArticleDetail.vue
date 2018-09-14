<template>
	<section>
				<mt-header title="文章详情" style="background: #58b7ff;height: 45px;font-size: 18px;" fixed>
  <router-link to="/home" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
</mt-header>
<div class="title-content">
	<div class="title-head">
		<h2>{{articleInfo.article_name}}</h2>
		<div class="fu-head"><span class="art-time">{{articleInfo.article_time}}</span><span class="art-hot">点击量：{{articleInfo.article_click}}</span></div>
	</div>
	<div class="title-body" v-html="articleInfo.article_content">
		<!--<p>     额，什么鬼，怎么还不是我背了那么多遍的那道闭包题，让我想想。 setTimeout 会延迟执行，那么执行到 console.log 的时候，其实 i 已经变成 5 了，对，就是这样，这么简单怎么可能难到老子。</p>
		<p>		 额，什么鬼，怎么还不是我背了那么多遍的那道闭包题，让我想想。 setTimeout 会延迟执行，那么执行到 console.log 的时候，其实 i 已经变成 5 了，对，就是这样，这么简单怎么可能难到老子。</p>
		<p> 	额，什么鬼，怎么还不是我背了那么多遍的那道闭包题，让我想想。 setTimeout 会延迟执行，那么执行到 console.log 的时候，其实 i 已经变成 5 了，对，就是这样，这么简单怎么可能难到老子。</p>
		<p> 	额，什么鬼，怎么还不是我背了那么多遍的那道闭包题，让我想想。 setTimeout 会延迟执行，那么执行到 console.log 的时候，其实 i 已经变成 5 了，对，就是这样，这么简单怎么可能难到老子。</p>
		<p> 	额，什么鬼，怎么还不是我背了那么多遍的那道闭包题，让我想想。 setTimeout 会延迟执行，那么执行到 console.log 的时候，其实 i 已经变成 5 了，对，就是这样，这么简单怎么可能难到老子。</p>-->
	</div>
</div>


	</section>
</template>

<script>
	import { getArticleDetail } from "../js/api"
	export default {
		name: 'ArticleDetail',
		data() {
			return {
				articleInfo: ''
			}
		},
		methods: {

		},
		mounted() {
			if(this.$route.query.id) {
				getArticleDetail({article_id:this.$route.query.id}).then(data => {
					let {
						err_code,
						err_msg,
						detail
					} = data;
					if(err_code != 0) {
						console.log(errCode);
						this.$message({
							message: err_msg,
							type: 'error'
						});
					} else {
						this.articleInfo = detail;
					}
				});
			}

		}
		
	}
</script>

<style scoped="scoped">
	.title-content{
		margin-top: 50px;
		padding: 0 3%;
	}
	.title-head{
		padding: 1rem 8% 0.5rem;
		border-bottom: 1px solid #ddd;
	}
	.title-head h2{
		font-size: 1rem;
		font-weight: 700;
		text-align: center;
	}
	.fu-head{
		color: #b5b9bc;
		height: 1.5rem;
		line-height: 1.5rem;
		font-size: 0.7rem;
	}
	.art-time{
		float: left;
	}
	.art-hot{
		float: right;
	}
	.title-body{
		margin-top: 1rem;
		font-size: 0.7rem;
		line-height: 1.2rem;
		width: 100%;
	}
	.title-body img{
		width: 100%;
	}
</style>