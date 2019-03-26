<template>
	<section class="contentSearch">
		<div>
			<search @result-click="resultClick" @on-change="getResult" :results="results" v-model="searchValue" position="absolute"
			  @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search" placeholder="请输入电影或电视剧名称"></search>
		</div>
	</section>
</template>
<script>
	import {
		queryPlayerNav,
		queryMovie,
		queryAllItem
	} from "../js/api"
	export default {
		name: 'TabBar',
		data() {
			return {
				results: [],
				searchValue: ''
			}
		},
		methods: {
			setFocus() {
				this.$refs.search.setFocus()
			},
			resultClick(item) {
				window.alert('you click the result item: ' + JSON.stringify(item))
			},
			getResult(val) {
				console.log('on-change', val)
				this.results = val ? getResult(this.value) : []
			},
			onSubmit() {
				this.$refs.search.setBlur()
				this.$vux.toast.show({
					type: 'text',
					position: 'top',
					text: 'on submit'
				})
			},
			onFocus() {
				console.log('on focus')
			},
			onCancel() {
				console.log('on cancel')
			}
		},

		mounted() {
			var hash = window.location.hash;
			this.currentHash = hash.substr(1, hash.length);
		},
		created() {

		},

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.contentSearch {}
</style>
<style>

</style>
