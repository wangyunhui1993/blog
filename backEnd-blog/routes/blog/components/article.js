/**
 * Created by Neo on 2020/03/20.
 */
var cheerio = require('cheerio');
var pool = require('../../../conf/pool.js');
var $err = require('../../../conf/errInfo.js');
module.exports = {
	query(req, res, next) {
		pool.getConnection(function (err, connection) {
			if (connection) {
				// 获取前台页面传过来的参数
				var param = req.body;
				var data = {
					pageNum: param.pageNum,
					pageSize: param.pageSize,
					sort_article_id:param.sort_article_id,
				};
				let sql =`select article_id,article_click,article_content,article_name, date_format(article_time, "%Y-%m-%d %H:%i") article_time,cover,author,article_sort.sort_article_id,sort_article_name FROM  article left  JOIN  article_sort  on article.sort_article_id = article_sort.sort_article_id where article_state=1${data.sort_article_id?' and article.sort_article_id='+data.sort_article_id:''} order by article_time desc limit ${(data.pageNum - 1) * data.pageSize},${data.pageSize}`
				connection.query(sql, function (err, result) {
					if (result) {
						for (var item of result) {
							let $ = cheerio.load(item.article_content);
							//超出120个字符长度显示省略号
							if ($.text().length > 120) {
								item.article_content = $.text().substring(0, 120) + '......';
							} else {
								item.article_content = $.text();
							}
						}
						//查询总记录数
						connection.query(`select COUNT(*) as total FROM article where  article_state=1 ${data.sort_article_id?' and article.sort_article_id='+data.sort_article_id:''}`, function (
							err,
							result_count
						) {
							//查询
							if (result_count) {
								// 以json形式，把操作结果返回给前台页面
								let resInfo = Object.assign({}, $err.code_0, {
									list: result
								});
								resInfo.total = result_count[0]['total'];
								res.json(resInfo);
								connection.release();   // 释放连接
							} else {
								res.json(err);
								connection.release();   // 释放连接
							}
						});
					} else {
						res.json(err);
						connection.release();   // 释放连接
					}
				});
			} else {
				let resInfo = $err.code_13;
				console.log(resInfo);
				res.json(resInfo);
			}
		});
	},

// 查询点击排行榜前五
clickTop: function (req, res, next) {
	pool.getConnection(function (err, connection) {
		if (connection) {
			let sql = 'select article_id,article_name from article where article_state=1 order by article_click desc limit 0,5';
			connection.query(sql, function (err, result) {
				//查询
				if (result) {
					// 以json形式，把操作结果返回给前台页面
					let resInfo = Object.assign({}, $err.code_0, {
						list: result
					});
					res.json(resInfo);
				} else {
					res.json(err);
				}
				connection.release();
			});
		} else {
			let resInfo = $err.code_13;
			res.json(resInfo);
			connection.release();
		}
	});
},
	// 查询最新排行榜前8
	newTop: function (req, res, next) {
		pool.getConnection(function (err, connection) {
			if (connection) {
				let sql = 'select article_id,article_name,article_time from article where article_state=1 order by article_time desc limit 0,8';
				connection.query(sql, function (err, result) {
					//查询
					if (result) {
						// 以json形式，把操作结果返回给前台页面
						let resInfo = Object.assign({}, $err.code_0, {
							list: result
						});
						res.json(resInfo);
					} else {
						res.json(err);
					}
					connection.release();
				});
			} else {
				let resInfo = $err.code_13;
				res.json(resInfo);
			}
		});
	},



	detail: function (req, res, next) {
		pool.getConnection(function (err, connection) {
			if (connection) {
				// 获取前台页面传过来的参数
				var param = req.body;
				var data = {
					article_id: param.article_id,
				};
				if (data) {
					let sql =
						'select article_id,article_click,article_content,article_name, date_format(article_time, "%Y-%m-%d %H:%i") article_time,cover,author,article_sort.sort_article_id,sort_article_name FROM  article left  JOIN  article_sort  on article.sort_article_id = article_sort.sort_article_id  where article_state=1 and article_id =' + data.article_id;
					connection.query(sql, function (err, result) {
						//使访问量增加
						connection.query(`UPDATE article  set article_click=article_click+1 WHERE article_id=${param.article_id}`);
						// 以json形式，把操作结果返回给前台页面
						let resInfo = Object.assign({}, $err.code_0, {
							data: result[0]
						});
						res.json(resInfo);
						connection.release();
					});
				}
			} else {
				let resInfo = $err.code_13;
				res.json(resInfo);
				connection.release();
			}

		});
	},
	//发表/更新文章
	submit: function (req, res, next) {
		pool.getConnection(function (err, connection) {
			if (connection) {
				// 获取前台页面传过来的参数
				var param = req.body;
				var data = {
					article_id: param.article_id,
					article_name: param.article_name,
					article_content: param.article_content,
					sort_article_id: param.sort_article_id,
					cover: param.cover,
					article_time: new Date(),
				};
				let sql = '';
				if (data.article_id) {
					sql = 'UPDATE article SET ? WHERE article_id =' + data.article_id;
				} else {
					sql = 'INSERT INTO article SET  ?';
				}
				connection.query(sql, data, function (err, result) {
					if (result) {
						// 以json形式，把操作结果返回给前台页面
						res.json($err.code_0);
					} else {
						res.json(err);
					}

					connection.release();   // 释放连接
				});
			} else {
				let resInfo = $err.code_13;
				res.json(resInfo);
				connection.release();    // 释放连接
			}

		});
	},
	del: function (req, res, next) {
		pool.getConnection(function (err, connection) {
			if (connection) {
				// 获取前台页面传过来的参数
				var param = req.body;
				var data = {
					article_id: param.article_id,
				};
				let sql = 'UPDATE article SET article_state = 0  WHERE article_id =' + data.article_id;
				connection.query(sql, function (err, result) {
					if (result) {
						let resInfo = Object.assign({}, $err.code_0, {});
						res.json(resInfo);
						connection.release();
					} else {
						res.json(err);
						connection.release();
					}
				});
			} else {
				let resInfo = $err.code_13;
				res.json(resInfo);
				connection.release();
			}

		});
	},

}