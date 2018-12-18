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
                    if(msg===false){
                        let resInfo=Object.assign($err.code_100,{});
                        res.json(resInfo);
                    }else{
						// console.log(msg);
                        res.json(msg);
                    }

                });
			// let sql='select * from user where user_id='+data.user_id;
			// console.log('执行的sql语句',sql);
			// connection.query(sql, function(err, result) {   //查询
			// 		console.log('查询到的结果',JSON.stringify(result));
			// 			if(result){
			// 				console.log(result);
			// 				if(result.length===0){
			// 					let resInfo=Object.assign($err.code_12,{});
			// 					res.json(resInfo);
			// 				}else{
			// 					// 以json形式，把操作结果返回给前台页面
			// 					let resInfo=Object.assign($err.code_0,{detail:result[0]});
			// 					res.json(resInfo);
			// 				}
							
			// 				// 释放连接 
			// 				connection.release();
			// 			}else{
			// 				res.json(err);
			// 			}
			// });
			
		}
		});
    },
}