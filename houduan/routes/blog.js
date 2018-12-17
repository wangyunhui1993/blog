/**
 * Created by Neo on 2018/9/6.
 */
//实现与mysql交互
var mysql = require('mysql');
var $conf = require('../conf/db.js');
var $util = require('../util/util.js');
var $err = require('../conf/errInfo.js');
var $util = require('../util/util.js');
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
	//发表文章
	create: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.body;
			console.log('req.body', req.body);
			// 建立连接，向表中插入值
			let paramNeedObj = {
				article_name: {
					require: true,
					name: '文章标题',
					code: 'code_4',
					isEmpty: false
				},
				article_content: {
					require: true,
					name: '文章内容',
					code: 'code_5',
					isEmpty: false
				},
			};
			var data = checkAttr(param, paramNeedObj, res);
			if (data) {
				data.article_time = new Date();
				let sql = 'INSERT INTO article SET  ?';
				connection.query(sql, data, function(err, result) {
					//插入
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
		});
	},
	
	
	query: function(req, res, next) {
		pool.getConnection(function(err, connection) {
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
			if (data) {
				let sql =
					'select article_id,article_name,article_time from article limit ' +
					(data.pageNum - 1) * data.pageSize +
					',' +
					data.pageSize;
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
								let resInfo = Object.assign($err.code_0, {
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
			}
		});
	},
	
	
	detail: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.body;
			console.log('前台传来的参数', JSON.stringify(param));
			// 建立连接，向表中插入值
			let paramNeedObj = {
				article_id: {
					require: true,
					name: '文章ID',
					code: 'code_8'
				},
			};
			var data = checkAttr(param, paramNeedObj, res);
			console.log('格式化后的参数', JSON.stringify(data));
			if (data) {
				let sql = 'select * from article where article_id=' + data.article_id;
				console.log('执行的sql语句', sql);
				connection.query(sql, function(err, result) { //查询
					console.log('查询到的结果', JSON.stringify(result));
					if (result) {
						console.log(result);
						if (result.length === 0) {
							let resInfo = Object.assign($err.code_11, {});
							res.json(resInfo);
						} else {
							// 以json形式，把操作结果返回给前台页面
							let resInfo = Object.assign($err.code_0, {
								detail: result[0]
							});
							res.json(resInfo);
						}

						// 释放连接 
						connection.release();
					} else {
						res.json(err);
					}
				});

			}
		});
	},
	
	
	article_delete: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.body;
			console.log('前台传来的参数', JSON.stringify(param));
			// 建立连接，向表中插入值
			let paramNeedObj = {
				article_id: {
					require: true,
					name: "文章ID",
					code: "code_8"
				},
			};
			var data = checkAttr(param, paramNeedObj, res);
			console.log('格式化后的参数', JSON.stringify(data));
			if (data) {
				let sql = 'select * from article where article_id=' + data.article_id;
				console.log('执行的sql语句', sql);
				connection.query(sql, function(err, result) { //查询
					console.log('查询到的结果', JSON.stringify(result));
					if (result) {
						console.log(result);
						if (result.length === 0) {
							let resInfo = Object.assign($err.code_11, {});
							res.json(resInfo);
						} else {
							let sql = 'UPDATE article SET article_state = 0  WHERE article_id =' + data.article_id;
							console.log('执行的sql语句', sql);
							connection.query(sql, function(err, result) { //查询
								if (result) {
									console.log(result);
									// 以json形式，把操作结果返回给前台页面
									let resInfo = Object.assign($err.code_0, {});
									res.json(resInfo);
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
		});
	},
	
	
	edit: function(req, res, next) {
		console.log('文章修改');
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.body;
			console.log('前台传来的参数', JSON.stringify(param));
			// 建立连接，向表中插入值
			let paramNeedObj = {
				article_id: {
					require: true,
					name: "文章ID",
					code: "code_8"
				},
				article_name: {
					require: true,
					name: '文章标题',
					code: 'code_4',
					isEmpty: false
				},
				article_content: {
					require: true,
					name: '文章内容',
					code: 'code_5',
					isEmpty: false
				},
			};
			var data = checkAttr(param, paramNeedObj, res);
			console.log('格式化后的参数', JSON.stringify(data));
			if (data) {
				let sql = 'select * from article where article_id=' + data.article_id;
				console.log('执行的sql语句', sql);
				connection.query(sql, function(err, result) { //查询
					console.log('查询到的结果', JSON.stringify(result));
					if (result) {
						console.log(result);
						if (result.length === 0) {
							let resInfo = Object.assign($err.code_11, {});
							res.json(resInfo);
						} else {
							let sql = 'UPDATE article SET ? WHERE article_id =' + data.article_id;
							console.log('执行的sql语句', sql);
							connection.query(sql, data, function(err, result) { //查询
								if (result) {
									console.log(result);
									// 以json形式，把操作结果返回给前台页面
									let resInfo = Object.assign($err.code_0, {});
									res.json(resInfo);
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
		});
	},
};
