<template>
	<section>
		<div  class="contenter">
			<router-view></router-view>
			<CopyRight></CopyRight>
		</div>
		<tabbar-select></tabbar-select>
	</section>
</template>
<script>
	import Tabbar from '@/components/TabBar'
	import CopyRight from '@/components/CopyRight'
	import {
		queryPlayerNav,
		queryMovie,
		queryAllItem
	} from "../js/api"
	export default {
		components: {
		  'tabbar-select': Tabbar,
		  'CopyRight': CopyRight
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
	/* .contenter{      //会导致弹出层不能点击
		overflow-y: auto;
		height: calc(100vh - 53px);
		-webkit-overflow-scrolling: touch;
	} */
</style>
