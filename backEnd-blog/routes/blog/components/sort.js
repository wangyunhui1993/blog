/**
 * Created by Neo on 2020/03/20.
 */
var pool = require('../../../conf/pool.js');
var $err = require('../../../conf/errInfo.js');
module.exports = {
	query: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            if (connection) {
                let sql =
                    'select sort_article_id,sort_article_name,sort FROM article_sort order by sort ASC';
                connection.query(sql, function (err, result) {
                    // 以json形式，把操作结果返回给前台页面
                    let resInfo = Object.assign({}, $err.code_0, {
                        list: result
                    });
                    res.json(resInfo);
                    connection.release();
                });
            } else {
                let resInfo = $err.code_13;
                res.json(resInfo);
                connection.release();
            }
        });
    },
	//新增/更新分类
	submit: function (req, res, next) {
		pool.getConnection(function (err, connection) {
			if (connection) {
				// 获取前台页面传过来的参数
				var param = req.body;
				var data = {
					sort_article_name: param.sort_article_name,
					sort: param.sort,
				};
				let sql = '';
				if (param.sort_article_id) {
                    data.sort_article_id =  param.sort_article_id,
					sql = 'UPDATE article_sort SET ? WHERE sort_article_id =' + data.sort_article_id;
				} else {
					sql = 'INSERT INTO article_sort SET  ?';
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
					sort_article_id: param.sort_article_id,
				};
				let sql = 'UPDATE article SET article_state = 0  WHERE sort_article_id =' + data.sort_article_id;
				connection.query(sql, function (err, result) { 
					if (result) {
						let resInfo = Object.assign({}, $err.code_0, {});
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

}