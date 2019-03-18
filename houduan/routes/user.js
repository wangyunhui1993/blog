//实现与mysql交互
var mysql = require('mysql');
var $conf = require('../conf/db.js');
var $util = require('../util/util.js');
var $err = require('../conf/errInfo.js');
var checkAttr = require('./components/checkAttr.js');
//使用连接池
var pool = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function(res, ret, err) {
	if (typeof ret === 'undefined') {
		res.json({
			code: '1',
			msg: err
		});
	} else {
		res.json(ret);
	}
};

module.exports = {
	//创建用户
	create: function(req, res, next) {
		pool.getConnection(function(err, connection) {
				if(connection){
								// 获取前台页面传过来的参数
					var param = req.body;
					console.log('前台传来的参数', JSON.stringify(param));
					let paramNeedObj = {
						user_name: {
							require: true,
							name: "用户名",
							code: "code_2"
						},
						user_pwd: {
							require: true,
							name: "密码",
							code: "code_3"
						}
					};
					var data = checkAttr(param, paramNeedObj, res);
					console.log('格式化后的参数', JSON.stringify(data));
					if (data) {
						data.user_register_time = new Date ();
						let sql = 'select * from user where user_name=' + data.user_name;
						connection.query(sql, function(err, result) { //查询
							if (result) {
								console.log('查询结果', result.length);
								if (result.length > 0) {
									let resInfo = Object.assign($err.code_10, {});
									res.json(resInfo);
								} else {
									let sql = 'INSERT INTO user SET  ?';
									console.log('执行的sql语句', sql);
									connection.query(sql, data, function(err, result) { //插入
										if (result) {
											console.log(result);
											// 以json形式，把操作结果返回给前台页面
											res.json($err.code_0);
											// 释放连接
											connection.release();
										} else {
											res.json(err);
										}
									});
								}
							} else {
								res.json(err);
							}
						});
					}
					}else{
						let resInfo = $err.code_13;
						console.log(resInfo);
						res.json(resInfo);
					}

		});
	},
	query: function(req, res, next) {
		pool.getConnection(function(err, connection) {
				if(connection){
								// 获取前台页面传过来的参数
					var param = req.body;
					console.log('前台传来的参数', JSON.stringify(param));
					// 建立连接，向表中插入值
					let paramNeedObj = {
						pageSize: {require: true, name: '每页大小', code: 'code_6'},
						pageNum: {require: true, name: '页数', code: 'code_7'},
					};
					var data = checkAttr(param, paramNeedObj, res);
					if (data) {
						let sql =
							'select user_id,user_name,user_register_time from user limit ' +
							(data.pageNum - 1) * data.pageSize +
							',' +
							data.pageSize;
						connection.query (sql, function (err, result) {
							//查询
							if (result) {
								connection.query ('select found_rows()', function (
									err,
									result_count
								) {
									//查询
									if (result_count) {
										console.log (result_count);
										// 以json形式，把操作结果返回给前台页面
										let resInfo = Object.assign ($err.code_0, {list: result});
										resInfo.total = result_count[0]['found_rows()'];
										res.json (resInfo);
										// 释放连接
										connection.release ();
									} else {
										res.json (err);
									}
								});
							} else {
								res.json (err);
							}
						});
					}
					}else{
						let resInfo = $err.code_13;
						console.log(resInfo);
						res.json(resInfo);
					}

		});
	},
	detail: function (req, res, next) {
		pool.getConnection (function (err, connection) {
				if(connection){
								// 获取前台页面传过来的参数
						var param = req.body;
						console.log('前台传来的参数',JSON.stringify(param));
						// 建立连接，向表中插入值
						let paramNeedObj = {
							user_id: {require: true, name: '用户ID', code: 'code_12'},
						};
						var data = checkAttr (param, paramNeedObj,res);
						console.log('格式化后的参数',JSON.stringify(data));
						if (data) {
						let sql='select * from user where user_id='+data.user_id;
						console.log('执行的sql语句',sql);
						connection.query(sql, function(err, result) {   //查询
								console.log('查询到的结果',JSON.stringify(result));
									if(result){
										console.log(result);
										if(result.length===0){
											let resInfo=Object.assign($err.code_12,{});
											res.json(resInfo);
										}else{
											// 以json形式，把操作结果返回给前台页面
											let resInfo=Object.assign($err.code_0,{detail:result[0]});
											res.json(resInfo);
										}
										
										// 释放连接 
										connection.release();
									}else{
										res.json(err);
									}
						});
						
					}
					}else{
						let resInfo = $err.code_13;
						console.log(resInfo);
						res.json(resInfo);
					}

		});
	},



};
