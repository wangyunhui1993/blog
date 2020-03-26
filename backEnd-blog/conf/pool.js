//实现与mysql交互
var mysql = require('mysql');
var $conf = require('./db.js');
var $util = require('../util/util.js');
var $err = require('./errInfo.js');
//使用连接池
module.exports =  mysql.createPool($util.extend({}, $conf.mysql));


