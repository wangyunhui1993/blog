<template>
  <section>
    <mt-tabbar v-model="selected" fixed>
  <mt-tab-item  v-for="(item,index) in $router.options.routes" v-if="item.menuShow==true" :id="item.path" :key="index">
    <!--<img slot="icon" src="../assets/logo.png" >-->
    	<div><icon :name="item.iconCls"  scale="2"></icon></div>
    	<div>{{item.name}}</div>
    
  </mt-tab-item>
</mt-tabbar>
  </section>
</template>
<script>
export default {
  name: 'Tabbar',
  data () {
    return {
      selected:''
    }
  },
  watch:{
    selected:function(val, oldVal){
      
      this.$router.push({path:val});
      // this.selected=val;
    }
  },
  mounted(){
    this.selected=this.$route.path;
    // console.log(this.$route.path);
  }
}
</script>