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
	//发表留言
	create: function(req, res, next) {
		pool.getConnection(function(err, connection) {
				if(connection){
					// 获取前台页面传过来的参数
					var param = req.body;
					console.log('req.body', req.body);
					// 建立连接，向表中插入值
					let paramNeedObj = {
						message_content: {
							require: true, 
							name: '留言内容',
							code: 'code_4',
							isEmpty: false,
							
						},
						user_name: {
							require: true,
							name: '留言用户名',
							code: 'code_5',
							isEmpty: false
						},
					};
					var data = checkAttr(param, paramNeedObj, res);
					if (data) {
						data.message_stay_time = new Date();
						data.stay_user_ip = req.ip;
						let sql = 'INSERT INTO stay_message SET  ?';
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
					let sql =
						'select stay_id,user_name,message_content, date_format(message_stay_time, "%Y-%m-%d %H:%i") message_stay_time FROM stay_message order by message_stay_time desc';
					connection.query(sql, function(err, result) {
						//查询
						if (result) {
							connection.query('select found_rows()', function(
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
									resInfo.total = result_count[0]['found_rows()'];
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
			}else{
				let resInfo = $err.code_13;
				console.log(resInfo);
				res.json(resInfo);
			}	
		});
	},
	}