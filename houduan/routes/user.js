//实现与mysql交互
var mysql=require('mysql');
var $conf=require('../conf/db.js');
var $util=require('../util/util.js');
var $err=require('../conf/errInfo.js');
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
	//创建用户
	create: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.body;
			console.log("req.body",req.body);
			// 建立连接，向表中插入值
//			let sql='INSERT INTO user(user_id,user_name,user_pwd) VALUES(0,?,?)';
//			let sqlParams=[param.user_name, param.user_pwd];
			let paramNeedObj={user_name:{require:true,name:"用户名",code:"code_2"},user_pwd:{require:true,name:"密码",code:"code_3"}};
			let sqlParams={};
			let state=false;
			for(var item in paramNeedObj){
				if(paramNeedObj[item].require && !(item in param)){
					state=true;
					break;
				}else{
					sqlParams[item]=param[item]?param[item]:"";
					if(paramNeedObj[item].require && sqlParams[item]===""){   //必填属性为空直接返回错误信息
						res.json($err[paramNeedObj[item].code]);
						return;
					}
				}
			}
			if(state){   //必填属性缺少直接返回错误信息
				res.json($err.code_1);
				return;
			}
			let sql='INSERT INTO user SET  ?';
			connection.query(sql, sqlParams, function(err, result) {   //插入
				console.log("result",result);
				if(result) {
					let sqlQ='SELECT user_id,user_name FROM user WHERE user_id='+result.insertId;
					connection.query(sqlQ, function(err, result) {   //查询
						if(result){
							console.log(result);
							// 以json形式，把操作结果返回给前台页面
							res.json(result[0]);
							// 释放连接 
							connection.release();
						}
					});
				}
			});
		});
	},
	query:function(req, res, next){
		
	},



};