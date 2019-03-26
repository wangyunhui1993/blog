<template>
	<section class="contentTabbar">
		<tabbar v-for="item in $router.options.routes" v-if="item.isTabBar===true">
		  <tabbar-item v-for="tab in item.children" :selected="currentHash===tab.path" :link="tab.path">
		    <img slot="icon" :src="tab.icon">
		    <span slot="label">{{tab.name}}</span>
		  </tabbar-item>
		<!-- <tabbar-item>
		    <img slot="icon" src="../assets/icon_nav_msg.png">
		    <span slot="label">Message</span>
		  </tabbar-item>
		  <tabbar-item selected link="/component/demo">
		    <img slot="icon" src="../assets/icon_nav_article.png">
		    <span slot="label">Explore</span>
		  </tabbar-item>
		  <tabbar-item>
		    <img slot="icon" src="../assets/icon_nav_cell.png">
		    <span slot="label">News</span>
		  </tabbar-item> -->
		</tabbar>
	</section>
</template>
<script>
	export default {
		name: 'TabBar',
		data() {
			return {
				currentHash:'',
			}
		},
		methods: {
		},
		
		mounted() {
			var hash=window.location.hash;
			this.currentHash=hash.substr(1,hash.length);
		},
		created(){
			
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
