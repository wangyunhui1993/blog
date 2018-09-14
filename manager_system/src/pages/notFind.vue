<template>
  <el-col :span="24"><div class="grid-content bg-purple-dark" style='background: #e5e9f2; color: #555;height: 280px;width: 540px;padding: 40px;box-sizing: border-box;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;'>
  	<h1>悲剧啊！</h1>
  	<p style="width: 460px;height: 54px;color: #888;margin: 10px 0;">
  		HTTP 404……<br />
可能这个页面已经飞走了
  	</p>
  	<div>
  		<el-button type="success" @click="$router.push({path:'/user/userlist'})">回首页</el-button>
  	</div>
  	<div style="position:absolute;top:20px;right:20px;width: 202px;height: 200px;"><img src="../assets/images/404.svg" alt="" /></div>
  </div></el-col>
</template>
	
<script>
</script>

<style>
</style>