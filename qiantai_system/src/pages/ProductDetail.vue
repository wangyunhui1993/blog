<template>
	<section>
				<mt-header title="文章详情" style="background: #58b7ff;height: 45px;font-size: 18px;" fixed>
  <router-link to="/home" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
</mt-header>
<div class="title-content">
	<div class="title-head">
		<h2>额，什么鬼，怎么还不是我背了那么多遍的那道闭包题</h2>
		<div class="fu-head"><span class="art-time">七天前</span><span class="art-hot">点击量：777</span></div>
	</div>
	<div class="title-body">
		<p>     额，什么鬼，怎么还不是我背了那么多遍的那道闭包题，让我想想。 setTimeout 会延迟执行，那么执行到 console.log 的时候，其实 i 已经变成 5 了，对，就是这样，这么简单怎么可能难到老子。</p>
		<p>		 额，什么鬼，怎么还不是我背了那么多遍的那道闭包题，让我想想。 setTimeout 会延迟执行，那么执行到 console.log 的时候，其实 i 已经变成 5 了，对，就是这样，这么简单怎么可能难到老子。</p>
		<p> 	额，什么鬼，怎么还不是我背了那么多遍的那道闭包题，让我想想。 setTimeout 会延迟执行，那么执行到 console.log 的时候，其实 i 已经变成 5 了，对，就是这样，这么简单怎么可能难到老子。</p>
		<p> 	额，什么鬼，怎么还不是我背了那么多遍的那道闭包题，让我想想。 setTimeout 会延迟执行，那么执行到 console.log 的时候，其实 i 已经变成 5 了，对，就是这样，这么简单怎么可能难到老子。</p>
		<p> 	额，什么鬼，怎么还不是我背了那么多遍的那道闭包题，让我想想。 setTimeout 会延迟执行，那么执行到 console.log 的时候，其实 i 已经变成 5 了，对，就是这样，这么简单怎么可能难到老子。</p>
	</div>
</div>


	</section>
</template>

<script>
	import { getProductInfo } from "../js/api"
	export default {
		name: 'ProductDetail',
		data() {
			return {
				productInfo: ''
			}
		},
		methods: {

		},
		mounted() {
//			if(this.$route.query) {
//				console.log(this.$route.query);
//				getProductInfo(this.$route.query).then(data => {
//					let {
//						errCode,
//						errMsg,
//						product
//					} = data;
//					if(errCode != 0) {
//						console.log(errCode);
//						this.$message({
//							message: errMsg,
//							type: 'error'
//						});
//					} else {
//						this.productInfo = product;
//						this.imgs = eval(product.imgs);
//						console.log(this.productInfo)
//					}
//				});
//			}

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
	}
</style>