/**
 * Created by Neo on 2019/07/29.
 */
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
			msg: err,
		});
	} else {
		res.json(ret);
	}
};

module.exports = {
	//发表说说
	create: function(req, res, next) {
		pool.getConnection(function(err, connection) {
				if(connection){
					// 获取前台页面传过来的参数
					var param = req.body;
					console.log('req.body', req.body);
					// 建立连接，向表中插入值
					let paramNeedObj = {
						shuoshuo: {
							require: true, 
							name: '说说内容',
							code: 'code_4',
							isEmpty: false,
						},
						cover: {
							require: true, 
							name: '封面',
							code: 'code_4',
							isEmpty: true,
						},
					};
					var data = checkAttr(param, paramNeedObj, res);
					if (data) {
						data.shuo_time = new Date();
						let sql = 'INSERT INTO shuoshuo SET  ?';
						connection.query(sql, data, function(err, result) {
							//插入
							if (result) {
								// 以json形式，把操作结果返回给前台页面
								res.json($err.code_0);
							} else {
								res.json(err);
							}
 							// 释放连接
							connection.release();
						});
					}
					}else{
						let resInfo = $err.code_13;
						res.json(resInfo);
						// 释放连接
						connection.release();
					}

		});
	},
	
	
	query: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			if(connection){
				// 获取前台页面传过来的参数
				var param = req.body;
				// 建立连接，向表中插入值
				let paramNeedObj = {
					pageSize: {
						require: true,
						name: '每页大小',
						code: 'code_6'
					},  
					pageNum: {
						require: true,
						name: '页数',
						code: 'code_7'
					},
				};
				var data = checkAttr(param, paramNeedObj, res);
				if(data){
					let sql =
						'select shuo_id,shuoshuo,cover, date_format(shuo_time, "%Y-%m-%d %H:%i") shuo_time FROM shuoshuo order by shuo_time desc limit ' +(data.pageNum - 1) * data.pageSize +',' + data.pageSize;
					connection.query(sql, function(err, result) {
						//查询
						if (result) {
							connection.query('select COUNT(*) FROM shuoshuo', function(
								err,
								result_count
							) {
								//查询
								if (result_count) {
									console.log(result_count);
									// 以json形式，把操作结果返回给前台页面
									let resInfo = Object.assign({},$err.code_0, {
										list: result
									});
									resInfo.total = result_count[0]['COUNT(*)'];
									res.json(resInfo);
									// 释放连接
									connection.release();
								} else {
									res.json(err);
								}
							});
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
	}