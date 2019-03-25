<template>
	<section class="contentTabbar">
		<tabbar>
		  <tabbar-item>
		    <img slot="icon" src="../assets/icon_nav_button.png">
		    <span slot="label">Wechat</span>
		  </tabbar-item>
		  <tabbar-item show-dot>
		    <img slot="icon" src="../assets/icon_nav_msg.png">
		    <span slot="label">Message</span>
		  </tabbar-item>
		  <tabbar-item selected link="/component/demo">
		    <img slot="icon" src="../assets/icon_nav_article.png">
		    <span slot="label">Explore</span>
		  </tabbar-item>
		  <tabbar-item badge="2">
		    <img slot="icon" src="../assets/icon_nav_cell.png">
		    <span slot="label">News</span>
		  </tabbar-item>
		</tabbar>
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
	.contentTabbar{
		bottom: 0;
	}
</style>
<style>

</style>
