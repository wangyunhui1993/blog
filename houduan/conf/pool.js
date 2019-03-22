//实现与mysql交互
var mysql = require('mysql');
var $conf = require('./db.js');
var $util = require('../util/util.js');
var $err = require('./errInfo.js');
//使用连接池
var pool = mysql.createPool($util.extend({}, $conf.mysql));
module.exports = function(res,callback){
		pool.getConnection(function(err,connection) {
			if(connection){
				callback(connection);
			}else{
				let resInfo = $err.code_13;
				res.json(resInfo);
			}
		});
	}


