/**
 * Created by Neo on 2018/9/6.
 */
var express = require('express');
var router = express.Router();

var multer = require("multer");

var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'uploads/')
	},
	filename: function(req, file, cb) {
		const filenameArr = file.originalname.split('.');
		cb(null, Date.now() + '.' + filenameArr[filenameArr.length - 1]);
	}
})

var upload = multer({
	storage: storage
});
//var upload = multer({ dest: 'uploads/' })



var fs = require('fs');
//关联主程序
var goodlist = require('../good/goodlist.js');

var user = require('./user.js');
var blog = require('./blog.js');
var robot = require('./robot.js');
var player = require('./player.js');
var playerNav = require('./playerNav.js');
var movie = require('./movie.js');


var uploadFiles = require('./components/uploadFiles.js');
/* GET home page. */
//进入主页面信息
//router.get('/', function(req, res, next) {
//res.render('index', { title: '小k博客 (htmlk.cn)'});
//});

//增
router.get('/goodAdd', function(req, res, next) {
	goodlist.goodadd(req, res, next);
});

//删
router.get('/goodDel', function(req, res, next) {
	goodlist.gooddelete(req, res, next);
});
//改
router.get('/goodUpdate', function(req, res, next) {
	goodlist.goodupdate(req, res, next);
});
//查
router.post('/goodAll', function(req, res, next) {
	goodlist.goodAll(req, res, next);
});
router.get('/goodById', function(req, res, next) {
	goodlist.goodById(req, res, next);
});



//创建用户
router.post('/user_create', function(req, res, next) {
	console.log('创建用户');
	user.create(req, res, next);
});
//查询用户
router.post('/user_query', function(req, res, next) {
	console.log('查询用户');
	user.query(req, res, next);
});
//查询用户详情
router.post('/user_detail', function(req, res, next) {
	console.log('查询用户详情');
	user.detail(req, res, next);
});



//文件上传
router.post('/uploadFiles', upload.any(), function(req, res, next) {
	console.log('文件上传');
	uploadFiles.create(req, res, next);
});

//发表文章
router.post('/blog_create', function(req, res, next) {
	console.log('发表文章');
	blog.create(req, res, next);
});
//查询文章
router.post('/blog_query', function(req, res, next) {
	console.log('查询文章');
	blog.query(req, res, next);
});
//查询文章详情
router.post('/blog_detail', function(req, res, next) {
	console.log('查询文章');
	blog.detail(req, res, next);
});
//删除文章（假删除，更改状态为0）
router.post('/blog_delete', function(req, res, next) {
	console.log('删除文章');
	blog.article_delete(req, res, next);
});
//修改文章
router.post('/blog_edit', function(req, res, next) {
	console.log('查询文章');
	blog.edit(req, res, next);
});




//机器人聊天
router.get('/robot', function(req, res, next) {
	console.log('机器人聊天');
	robot.robot(req, res, next);
});






//查询播放源
router.post('/player_query', function(req, res, next) {
	console.log('查询播放源');
	player.query(req, res, next);
});


//添加播放导航
router.post('/create_playerNav', function(req, res, next) {
	console.log('添加播放导航');
	playerNav.create(req, res, next);
});
//添加播放导航
router.post('/query_playerNav', function(req, res, next) {
	console.log('查询播放导航');
	playerNav.query(req, res, next);
});



//查询播放列表
router.post('/query_movie', function(req, res, next) {
	console.log('查询播放列表');
	movie.query(req, res, next);
});
//查询所有集数
router.post('/query_allItem', function(req, res, next) {
	console.log('查询所有集数');
	movie.getPlayerList(req, res, next);
});
//搜索电影
router.post('/search_movie', function(req, res, next) {
	console.log('搜索电影');
	movie.searchMovie(req, res, next);
});






module.exports = router;
