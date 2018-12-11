//实现与mysql交互
var mysql=require('mysql');
var $conf=require('../../conf/db.js');
var $util=require('../../util/util.js');
var $err=require('../../conf/errInfo.js');
var net = require("net")
//使用连接池
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret,err) {
	if(typeof ret === 'undefined') {
		res.json({
			code:'1',
			msg: err
		});
	} else {
		res.json(ret);
	}
};

module.exports = {
	//文件上传
	create: function (req, res, next) {
		let base="http://localhost:3000/"
		res.json({
			code: 200, data:{ url:base+req.files[0].path }
		});
//		pool.getConnection(function(err, connection) {
//			// 获取前台页面传过来的参数
//			var param = req.body;
//			
//		});
	},
	query:function(req, res, next){
		
	},



};