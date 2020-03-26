<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	html{
		width: 100%;
		height: 100%;
	}
	body {
		padding:0px;
		margin:0px auto;
		height: 100%;
		width: 100%;
	}
	*{margin: 0;
		padding: 0;
	}
	a{
		text-decoration:none;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #2c3e50;
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
	}
</style>
