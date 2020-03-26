/**
 * Created by Neo on 2018/9/6.
 */
//实现与mysql交互

var mysql = require('mysql');
var $conf = require('../conf/db.js');
var $util = require('../util/util.js');
var $err = require('../conf/errInfo.js');
var cheerio = require('cheerio');
var checkAttr = require('./components/checkAttr.js');
//使用连接池
var pool = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret, err) {
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
	create: function (req, res, next) {
		pool.getConnection(function (err, connection) {
			if (connection) {
				// 获取前台页面传过来的参数
				var param = req.body;
				console.log('req.body', req.body);
				// 建立连接，向表中插入值
				let paramNeedObj = {
					article_name: {
						require: true,
						name: '文章标题',
						code: 'code_4',
						isEmpty: false,

					},
					article_content: {
						require: true,
						name: '文章内容',
						code: 'code_5',
						isEmpty: false
					},
					sort_article_id: {
						require: true,
						name: '文章分类',
						code: 'code_5',
						isEmpty: false
					},
					cover: {
						require: true,
						name: '文章封面',
						code: 'code_5',
						isEmpty: false
					},
				};
				var data = checkAttr(param, paramNeedObj, res);
				if (data) {
					data.article_time = new Date();
					let sql = 'INSERT INTO article SET  ?';
					connection.query(sql, data, function (err, result) {
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
			} else {
				let resInfo = $err.code_13;
				res.json(resInfo);
				// 释放连接
				connection.release();
			}

		});
	},


	query: function (req, res, next) {
		pool.getConnection(function (err, connection) {
			if (connection) {
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
						'select article_id,article_click,article_content,article_name, date_format(article_time, "%Y-%m-%d %H:%i") article_time,cover,article_sort.sort_article_id,sort_article_name FROM  article left  JOIN  article_sort  on article.sort_article_id = article_sort.sort_article_id order by article_time desc limit ' +
						(data.pageNum - 1) * data.pageSize +
						',' +
						data.pageSize;
					console.log('查询条件', sql)
					connection.query(sql, function (err, result) {
						//查询
						if (result) {
							for (var item of result) {
								let $ = cheerio.load(item.article_content);
								item.article_content = $.text().substring(0, 120) + '......'
							}
							connection.query('select COUNT(*) FROM article', function (
								err,
								result_count
							) {
								//查询
								if (result_count) {
									console.log(result_count);
									// 以json形式，把操作结果返回给前台页面
									let resInfo = Object.assign({}, $err.code_0, {
										list: result
									});
									resInfo.total = result_count[0]['COUNT(*)'];
									res.json(resInfo);
									// 释放连接
									connection.release();
								} else {
									res.json(err);
									// 释放连接
									connection.release();
								}
							});
						} else {
							res.json(err);
							// 释放连接
							connection.release();
						}
					});
				}
			} else {
				let resInfo = $err.code_13;
				console.log(resInfo);
				res.json(resInfo);
			}
		});
	},
	// 查询点击排行榜前五
	queryClick: function (req, res, next) {
		pool.getConnection(function (err, connection) {
			if (connection) {
				let sql = 'select article_id,article_name from article order by article_click desc limit 0,5';
				connection.query(sql, function (err, result) {
					//查询
					if (result) {
						// 以json形式，把操作结果返回给前台页面
						let resInfo = Object.assign({}, $err.code_0, {
							list: result
						});
						res.json(resInfo);
						// 释放连接
						connection.release();
					} else {
						res.json(err);
					}
				});
			} else {
				let resInfo = $err.code_13;
				console.log(resInfo);
				res.json(resInfo);
			}
		});
	},
	// 查询最新排行榜前8
	queryNew: function (req, res, next) {
		pool.getConnection(function (err, connection) {
			if (connection) {
				let sql = 'select article_id,article_name,article_time from article order by article_time desc limit 0,8';
				connection.query(sql, function (err, result) {
					//查询
					if (result) {
						// 以json形式，把操作结果返回给前台页面
						let resInfo = Object.assign({}, $err.code_0, {
							list: result
						});
						res.json(resInfo);
						// 释放连接
						connection.release();
					} else {
						res.json(err);
					}
				});
			} else {
				let resInfo = $err.code_13;
				console.log(resInfo);
				res.json(resInfo);
			}
		});
	},


	detail: function (req, res, next) {
		pool.getConnection(function (err, connection) {
			if (connection) {
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
					let sql =
									'select article_id,article_click,article_content,article_name, date_format(article_time, "%Y-%m-%d %H:%i") article_time,cover,article_sort.sort_article_id,sort_article_name FROM  article left  JOIN  article_sort  on article.sort_article_id = article_sort.sort_article_id  where article_id =' + data.article_id;
								connection.query(sql, function (err, result) {
									// 以json形式，把操作结果返回给前台页面
									let resInfo = Object.assign({}, $err.code_0, {
										data: result[0]
									});
									res.json(resInfo);
									// 释放连接 
									connection.release();
								});
				}
			} else {
				let resInfo = $err.code_13;
				res.json(resInfo);
				// 释放连接
				connection.release();
			}

		});
	},


	article_delete: function (req, res, next) {
		pool.getConnection(function (err, connection) {
			if (connection) {
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
					connection.query(sql, function (err, result) { //查询
						console.log('查询到的结果', JSON.stringify(result));
						if (result) {
							console.log(result);
							if (result.length === 0) {
								let resInfo = Object.assign({}, $err.code_11, {});
								res.json(resInfo);
							} else {
								let sql = 'UPDATE article SET article_state = 0  WHERE article_id =' + data.article_id;
								console.log('执行的sql语句', sql);
								connection.query(sql, function (err, result) { //查询
									if (result) {
										console.log(result);
										// 以json形式，把操作结果返回给前台页面
										let resInfo = Object.assign({}, $err.code_0, {});
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
			} else {
				let resInfo = $err.code_13;
				console.log(resInfo);
				res.json(resInfo);
			}

		});
	},


	edit: function (req, res, next) {
		console.log('文章修改');
		pool.getConnection(function (err, connection) {
			if (connection) {
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
					cover: {
						require: true,
						name: '文章封面',
						code: 'code_5',
						isEmpty: false
					},
					sort_article_id: {
						require: true,
						name: '文章分类',
						code: 'code_5',
						isEmpty: false
					},
				};
				var data = checkAttr(param, paramNeedObj, res);
				console.log('格式化后的参数', JSON.stringify(data));
				if (data) {
					let sql = 'select * from article where article_id=' + data.article_id;
					console.log('执行的sql语句', sql);
					connection.query(sql, function (err, result) { //查询
						console.log('查询到的结果', JSON.stringify(result));
						if (result) {
							console.log(result);
							if (result.length === 0) {
								let resInfo = Object.assign({}, $err.code_11, {});
								res.json(resInfo);
							} else {
								let sql = 'UPDATE article SET ? WHERE article_id =' + data.article_id;
								console.log('执行的sql语句', sql);
								connection.query(sql, data, function (err, result) { //查询
									if (result) {
										console.log(result);
										// 以json形式，把操作结果返回给前台页面
										let resInfo = Object.assign({}, $err.code_0, {});
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
			} else {
				let resInfo = $err.code_13;
				console.log(resInfo);
				res.json(resInfo);
			}

		});
	},
};
