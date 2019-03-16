<template>
	<section>
		<mt-header title="商品列表" fixed style="height: 45px;    background: #c7000a;font-size: 18px;">
			<router-link to="/class" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<!--<mt-button icon="more" slot="right"></mt-button>-->
		</mt-header>
		<div style="height: 44px;width: 100vw; position: fixed;top: 45px;left: 0;background: #fff;overflow-x: scroll; white-space:nowrap;line-height: 40px;padding-left: 5px;z-index: 1;">
			<mt-button size="small" :class="bg==bgAll?'focusbg':''" @click="itemList(bgAll)">全部</mt-button>
			<mt-button style="margin-right: 5px;" v-for="item in allCategorylist" v-if="item.parentId==firstCategory" size="small" :class="bg==item.id?'focusbg':''" @click="itemList(item.id)">{{item.categoryName}}</mt-button>
		</div>
		<mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" ref="loadmore" :bottomDistance="botDistance" :bottom-all-loaded="allLoaded" bottomDistance="30" :auto-fill="autoFill" :bottomAllLoaded="loadingStop">
			<div class="content">
				<div class="item" v-for="li in allProductList" @click="prductDetail(li.id)" :key="li.id">
					<img v-lazy="'http://www.taiibao.com/upload/5d2/760/918b39f6c20c530c2f12414979_71340_800x800.jpg'" />
					<div class="item-title">{{li.productName}}</div>
					<div class="price">￥:{{li.marketPrice}}</div>
					<icon class="shoppingCart" name="shopping-cart" scale="1.5"></icon>
				</div>
				<div class="noneMore" :class="controlNoneMore?'blockMore':'noneMore'">已无更多商品</div>
			</div>
			
		</mt-loadmore>
	</section>
</template>

<script>
	import { getCategoryList, getProductListByInformation, getCategoryInfo } from "../js/api"
	import { Indicator } from 'mint-ui';
	export default {
		name: 'ProductList',
		data() {
			return {
				selectCon: {
					start: 0,
					pageSize: 10,
					productName: "",
					qField: "",
					categoryId: null,
					unstock: 0,
					onSale: 1,
					isDelete: 0,
				},
				allProductList: [],
				allCategorylist: [],
				firstCategory: '',
				bg: 0,
				bgAll: 0,
				topStatus: '',
				bottomStatus: '',
				allLoaded: false,
				botDistance: 100,
				autoFill: false,
				allCount: 0,
				loadingStop: false,
				controlNoneMore: false
			}
		},
		methods: {
			prductDetail: function(index) {
				console.log(index);
				this.$router.push({
					query: {
						product_id: index
					},
					path: '/productdetail'
				});
			},
			itemList(id) {
				this.allProductList = [];
				
				this.bg = id;
				this.selectCon.start = 0;
				this.selectCon.categoryId = id;
				this.getProductList(true);
			},
			getProductList(catType) {
				if(catType) {
					Indicator.open({
						text: '加载中...',
						spinnerType: 'fading-circle'
					});
				}
				getProductListByInformation(this.selectCon).then(data => {
					let {
						errCode,
						errMsg,
						productList,
						count
					} = data;
					if(errCode != 0) {
						console.log(errCode);
						this.$message({
							message: errMsg,
							type: 'error'
						});
						Indicator.close();
					} else {
						console.log('this.selectCon', this.selectCon);
						console.log('productList', productList);
						console.log('count', count);
						this.allCount = count;
						this.allProductList = this.allProductList.concat(productList);
						if(catType) {
							console.log('hello');
							Indicator.close();
							if(count <= this.selectCon.pageSize) {
								this.loadingStop = true;
								this.controlNoneMore = true;
							} else {
								this.loadingStop = false;
								this.controlNoneMore = false;
							}
						}

					}
				});
			},
			handleBottomChange(status) {
				console.log(status);
				this.bottomStatus = status;
			},
			loadBottom() {
				console.log('上拉加载');
				setTimeout(() => {
					this.selectCon.start += this.selectCon.pageSize;
					console.log('this.selectCon.start', this.selectCon.start);
					console.log('this.allCount', this.allCount);

					this.getProductList(false);
					if((this.selectCon.start + this.selectCon.pageSize) >= this.allCount) {
						this.loadingStop = true;
						this.controlNoneMore = true;
					}
					this.$refs.loadmore.onBottomLoaded();
				}, 1000);

			}
		},
		mounted() {
			console.log(this.$route.query);
			if(this.$route.query.categoryId) {
				this.firstCategory = this.$route.query.categoryId;
				this.bgAll = this.$route.query.categoryId;
				if(this.$route.query.secCategoryId) {
					this.bg = this.$route.query.secCategoryId;
					this.selectCon.categoryId = this.$route.query.secCategoryId;
				} else {
					this.bg = this.$route.query.categoryId;
					
					this.selectCon.categoryId = this.$route.query.categoryId;
				}
				
				this.getProductList(true);
				getCategoryList({}).then(data => {
					let {
						errCode,
						errMsg,
						categorylist
					} = data;
					if(errCode != 0) {
						console.log(errCode);
						this.$message({
							message: errMsg,
							type: 'error'
						});
					} else {
						console.log(categorylist);
						this.allCategorylist = categorylist;
					}
				});
			}

		}
	}
</script>

<style scoped="scoped">
	image[lazy=loading] {
		width: 100%;
		height: 300px;
		margin: auto;
	}
	
	.content:after {
		display: block;
		clear: both;
		content: "";
		visibility: hidden;
		height: 0
	}
	
	.content {
		zoom: 1;
		padding-top: 90px;
		box-sizing: border-box;
		min-height: 100vh;
	}
	
	.item {
		margin: 2% 1% 0;
		width: 100%;
		background-color: #fff;
		border-radius: 2px;
		overflow: hidden;
		padding-bottom: 5px;
		float: left;
	}
	
	.item img {
		width: 100%;
	}
	
	.item-title {
		padding: 0 1%;
		margin: 5px 2px 2px;
		font-size: 12px;
		height: 30px;
		line-height: 15px;
		overflow: hidden;
		color: #666;
		font-size: 12px;
	}
	
	.price {
		padding: 0 1%;
		color: #c7000a;
		;
		float: left;
		height: 30px;
	}
	
	.shoppingCart {
		float: right;
		margin-right: 5px;
	}
	
	.focusbg {
		background: #ff4949;
		color: #fff;
	}
	
	.noneMore {
		display: none;
	}
	
	.blockMore {
		margin: 10px auto 50px;
		width: 100%;
		text-align: center;
		line-height: 40px;
		background-color: #fcfcfc;
		font-size: 18px;
		height: 40px;
		float: left;
		bottom: 0;
		display: block;
	}
</style>