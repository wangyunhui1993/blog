//实现与mysql交互
var mysql=require('mysql');
var $conf=require('../conf/db.js');
var $util=require('../util/util.js');
var $err=require('../conf/errInfo.js');
//使用连接池
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret,err) {
	if(typeof ret === 'undefined') {
		res.json({
			code:'1',
			msg: err
		});
	} else {
		res.json(ret);
	}
};

module.exports = {
	//添加博客
	create: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.body;
			console.log("req.body",req.body);
			// 建立连接，向表中插入值
			let paramNeedObj={article_name:{require:true,name:"文章标题",code:"code_4"},article_content:{require:true,name:"文章内容",code:"code_5"}};
			let sqlParams={};
			let state=false;
			for(var item in paramNeedObj){
				if(paramNeedObj[item].require && !(item in param)){
					state=true;
					break;
				}else{
					sqlParams[item]=param[item]?param[item]:"";
					if(paramNeedObj[item].require && sqlParams[item]===""){   //必填属性为空直接返回错误信息
						res.json($err[paramNeedObj[item].code]);
						return;
					}
				}
			}
			if(state){   //必填属性缺少直接返回错误信息
				res.json($err.code_1);
				return;
			}
			sqlParams.article_time=new Date();
			let sql='INSERT INTO article SET  ?';
			connection.query(sql, sqlParams, function(err, result) {   //插入
						if(result){
							console.log(result);
							// 以json形式，把操作结果返回给前台页面
							res.json($err.code_0);
							// 释放连接 
							connection.release();
						}else{
							res.json(err);
						}
			});
		});
	},
	query:function(req, res, next){
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.body;
			console.log("req.body",req.body);
			// 建立连接，向表中插入值
			let paramNeedObj={pageSize:{require:true,name:"每页大小",code:"code_6"},pageNum:{require:true,name:"页数",code:"code_7"}};
			let sqlParams={};
			let state=false;
			for(var item in paramNeedObj){
				if(paramNeedObj[item].require && !(item in param)){
					state=true;
					break;
				}else{
					sqlParams[item]=param[item]?param[item]:"";
					if(paramNeedObj[item].require && sqlParams[item]===""){   //必填属性为空直接返回错误信息
						res.json($err[paramNeedObj[item].code]);
						return;
					}
				}
			}
			if(state){   //必填属性缺少直接返回错误信息
				res.json($err.code_1);
				return;
			}
			let sql='select article_id,article_name,article_time from article limit ' +(sqlParams.pageNum-1)*sqlParams.pageSize+','+sqlParams.pageSize;
			connection.query(sql, function(err, result) {   //查询
						if(result){
							connection.query('select found_rows()', function(err, result_count) {   //查询
										if(result_count){
											
											console.log(result_count);
											// 以json形式，把操作结果返回给前台页面
											let resInfo=Object.assign($err.code_0,{list:result});
											resInfo.total=result_count[0]['found_rows()'];
											res.json(resInfo);
											// 释放连接 
											connection.release();
										}else{
											res.json(err);
										}
							});
							
							
							
// 							console.log(result);
// 							// 以json形式，把操作结果返回给前台页面
// 							let resInfo=Object.assign($err.code_0,{list:result});
// 							res.json(resInfo);
// 							// 释放连接 
// 							connection.release();
						}else{
							res.json(err);
						}
			});
		});
	},
	detail:function(req, res, next){
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.body;
			// 建立连接，向表中插入值
			let paramNeedObj={article_id:{require:true,name:"文章ID",code:"code_8"}};
			let sqlParams={};
			let state=false;
			for(var item in paramNeedObj){
				if(paramNeedObj[item].require && !(item in param)){
					state=true;
					break;
				}else{
					sqlParams[item]=param[item]?param[item]:"";
					if(paramNeedObj[item].require && sqlParams[item]===""){   //必填属性为空直接返回错误信息
						res.json($err[paramNeedObj[item].code]);
						return;
					}
				}
			}
			if(state){   //必填属性缺少直接返回错误信息
				res.json($err.code_1);
				return;
			}
			let sql='select * from article where article_id='+sqlParams.article_id;
			connection.query(sql, function(err, result) {   //查询
						if(result){
							console.log(result);
							// 以json形式，把操作结果返回给前台页面
							let resInfo=Object.assign($err.code_0,{detail:result[0]});
							res.json(resInfo);
							// 释放连接 
							connection.release();
						}else{
							res.json(err);
						}
			});
		});
	},
	


};