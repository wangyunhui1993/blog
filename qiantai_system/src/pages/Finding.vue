<template>
	<section>
<mt-header title="发现" style="background: #58b7ff;height: 45px;font-size: 18px;" fixed>
  <router-link to="/home" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
</mt-header>

		<tabbar-select></tabbar-select>
	</section>
</template>

<script>
	import {} from "../js/api"
	import Tabbar from '@/pages/Tabbar'
	export default {
		name: 'Find',
		components: {
			'tabbar-select': Tabbar
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted() {

		}
	}
</script>

<style>
	
</style>