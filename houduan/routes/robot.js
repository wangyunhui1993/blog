//实现与mysql交互
var mysql = require('mysql');
var $conf = require('../conf/db.js');
var $util = require('../util/util.js');
var $err = require('../conf/errInfo.js');
var checkAttr = require('./components/checkAttr.js');
//使用连接池
var pool = mysql.createPool($util.extend({}, $conf.mysql));
var forwardRobot = require('./components/forwardRobot.js');
// forwardRobot('hello');

module.exports = {
    robot:function(req, res, next){
        console.log('进入机器人聊天接口',req);
        pool.getConnection (function (err, connection) {
			console.log('err',err);
			// 获取前台页面传过来的参数
			var param = req.query;
			console.log('前台传来的参数',JSON.stringify(param));
			// 建立连接，向表中插入值
			let paramNeedObj = {
                message: {require: true, name: '消息', code: 'code_12'},
                userId: {require: true, name: 'userId', code: 'code_12'},
			};
			var data = checkAttr (param, paramNeedObj,res);
			console.log('格式化后的参数',JSON.stringify(data));
			if (data) {
                forwardRobot(data,function(msg){
					let info={
						time:new Date(),
						ip:req.ip,
						send:data.message,
						userId:data.userId
					}
					let resInfo='';
                    if(msg===false){
						resInfo=Object.assign($err.code_100,{});
						info.receive=$err.msg_100;
                    }else{
						 resInfo=Object.assign($err.code_0,{message:msg});
						 info.receive=msg;
					}
					let sql = 'INSERT INTO robot SET  ?';
							console.log('执行的sql语句', sql);
							connection.query(sql, info, function(err, result) { //插入
								if (result) {
									console.log(result);
									// 以json形式，把操作结果返回给前台页面
									res.json(resInfo);
								} else {
									res.json(err);
								}
								// 释放连接
								connection.release();
							});
                });
		}
		});
	},
	
}