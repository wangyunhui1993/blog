const addr=window.location.hostname;

window.g = {
	netName : '后台管理系统',            /*项目名字*/
	// base :"http://"+addr+":3000",    /*外网接口前缀*/
	// base : 'http://192.168.1.13:3000',
	// base : 'http://neo-o.51vip.biz:46653',
	base : 'http://localhost:3000',
}
console.log('接口前缀',window.g.base);	
