<template>
	<div class="content">
		<div>
			<group label-width="100px">
				<cell title="选择接口">
					<selector :options='resourceList' :value-map="['url','title']" v-model="base"></selector>
				</cell>
				<div>
					<x-input v-model="url" :show-clear='false' placeholder='请输入地址' class="weui-vcode">
						<x-button slot="right" type="primary" small @click.native="player">确定</x-button>
					</x-input>
				</div>
			</group>
		</div>
		<div>
			<iframe ref="iframe" width="100%" height="400px" frameborder="0"></iframe>
		</div>
		<toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="err_msg" position="middle"></toast>
	</div>
</template>
<script>
	import {
		playerQuery
	} from "../js/api"
	import {
		querystring
	} from 'vux'
	export default {
		name: 'HelloWorld',
		data() {
			return {
				base: '',
				url: '132',
				showPositionValue: false,
				err_msg: '',
				resourceList: [],
				props: {
					key: 'url',
					value: 'title'
				},
			}
		},
		methods: {
			getPlayerQuery() {
				//获取播放源列表
				let info = {};
				playerQuery(info).then(data => {
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
						this.resourceList = list;
						this.base = list[0].url;
						this.$refs.iframe.src = list[0].url + this.url;
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
			this.getPlayerQuery();
		},
		created() {
			var search = window.location.hash.split('?')[1];
			this.url = querystring.parse(search).url || '';
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
