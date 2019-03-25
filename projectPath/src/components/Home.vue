<template>
	<section>
		<router-view class="contenter"></router-view>
		<tabbar-select></tabbar-select>
	</section>
</template>
<script>
	import Tabbar from '@/components/TabBar'
	import {
		queryPlayerNav,
		queryMovie,
		queryAllItem
	} from "../js/api"
	export default {
		components: {
		  'tabbar-select': Tabbar
		},
		name: 'Home',
		data() {
			return {

			}
		},
		methods: {
		},
		mounted() {
			
			
			
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<style>
	.contenter{
		overflow-y: auto;
		height: calc(100vh - 53px);
	}
</style>
