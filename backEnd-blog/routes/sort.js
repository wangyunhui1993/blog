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
    //添加文章分类
    create: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            if (connection) {
                // 获取前台页面传过来的参数
                var param = req.body;
                console.log('req.body', req.body);
                // 建立连接，向表中插入值
                let paramNeedObj = {
                    sort_article_name: {
                        require: true,
                        name: '分类名称',
                        code: 'code_4',
                        isEmpty: false,
                    },
                    sort: {
                        require: true,
                        name: '分类名称',
                        code: 'code_4',
                        isEmpty: false,
                    },
                };
                var data = checkAttr(param, paramNeedObj, res);
                if (data) {
                    let sql = 'INSERT INTO article_sort SET  ?';
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
                let sql =
                    'select sort_article_id,sort_article_name,sort FROM article_sort order by sort ASC';
                connection.query(sql, function (err, result) {
                    console.log('result', result)
                    // 以json形式，把操作结果返回给前台页面
                    let resInfo = Object.assign({}, $err.code_0, {
                        list: result
                    });
                    res.json(resInfo);
                    // 释放连接 
                    connection.release();
                });
            } else {
                let resInfo = $err.code_13;
                console.log(resInfo);
                res.json(resInfo);
                // 释放连接 
                connection.release();
            }
        });
    },
    edit: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            if (connection) {
                var param = req.body;
                console.log('前台传来的参数', JSON.stringify(param));
                // 建立连接，向表中插入值
                let paramNeedObj = {
                    sort_article_id: {
                        require: true,
                        name: "分类ID",
                        code: "code_1"
                    },
                    sort_article_name: {
                        require: true,
                        name: '分类名称',
                        code: 'code_1',
                        isEmpty: false
                    },
                    sort: {
                        require: true,
                        name: '分类排序',
                        code: 'code_1',
                        isEmpty: true
                    },
                };
                var data = checkAttr(param, paramNeedObj, res);
                console.log('格式化后的参数', JSON.stringify(data));
                if (data) {
                    let sql = 'UPDATE article_sort SET ? WHERE sort_article_id =' + data.sort_article_id;
                    console.log('sql',sql)
                    connection.query(sql, data, function (err, result) {
                        console.log('result', result)
                        // 以json形式，把操作结果返回给前台页面
                        let resInfo = Object.assign({}, $err.code_0, {});
                        res.json(resInfo);
                        // 释放连接 
                        connection.release();
                    });
                }

            } else {
                let resInfo = $err.code_13;
                console.log(resInfo);
                res.json(resInfo);
                // 释放连接 
                connection.release();
            }
        });
    },
    del: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            if (connection) {
                // 获取前台页面传过来的参数
                var param = req.body;
                console.log('req.body', req.body);
                // 建立连接，向表中插入值
                let paramNeedObj = {
                    id: {
                        require: true,
                        name: '分类id',
                        code: 'code_4',
                        isEmpty: false,
                    },
                };
                var data = checkAttr(param, paramNeedObj, res);
                if (data) {
                    let sql = `delete from article_sort where sort_article_id = ${data.id}`;
                    connection.query(sql, function (err, result) {
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
}