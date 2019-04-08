var https = require("https");

var pool = require("../conf/pool.js");
var $util = require("../util/util.js");
var $err = require("../conf/errInfo.js");
var checkAttr = require("./components/checkAttr.js");
var NAV = require("./components/getNav.js");
module.exports = {
  create: function(req, res, next) {
    pool(res, function(connection) {
        let sql =
            'truncate table playerNav';
        connection.query(sql, function(err, result) {
            //查询
            if (result) {
                let baseUrl="https://v.qq.com/";
                NAV.firstNav(baseUrl,function(firNavList){
                let insertArr=[];
                for(var fItem of firNavList){
                    var arrList = fItem.split("\"");
                    insertArr.push([arrList[1],arrList[3],0,'TX']);
                }
                let sql = "INSERT INTO playerNav(`url`,`name`,`parentID`, `type`) VALUES ?";
                connection.query(sql, [insertArr], function(
                    err,
                    row
                ) {
                    //查询
                    if (row) {
                        console.log(row);
                        res.json(row);
                    } else {
                        res.json(err);
                    }
					// 释放连接
					connection.release();
                });
                });
            } else {
                res.json(err);
            }
        });
    });
  },
  query: function(req, res, next) {
    pool(res, function(connection) {
        let sql ='select * from mplayerNav';
        connection.query(sql, function(err, result) {
            //查询
            if (result) {
                let resInfo = Object.assign ($err.code_0, {list: result});
				res.json (resInfo);
            } else {
                res.json(err);
            }
			// 释放连接
			connection.release();
        });
    });
  },
  getPlayerList:function(){
      
  },
  
};
