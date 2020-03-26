/**
 * Created by Neo on 2020/03/20.
 */
var express = require('express');

var router = express.Router();
var article = require('./components/article.js');
var sort = require('./components/sort.js');
//查询文章
router.post('/article/query', function(req, res, next) {
	console.log('查询文章');
	article.query(req, res, next);
});
//查询点击排行
router.post('/article/clickTop', function(req, res, next) {
	console.log('查询点击排行');
	article.clickTop(req, res, next);
});
//查询最新排行榜前8
router.post('/article/newTop', function(req, res, next) {
	console.log('查询最新排行榜前8');
	article.newTop(req, res, next);
});
//新增/更新文章
router.post('/article/submit', function(req, res, next) {
	console.log('新增/更新文章');
	article.submit(req, res, next);
});
//文章详情
router.post('/article/detail', function(req, res, next) {
	console.log('文章详情');
	article.detail(req, res, next);
});
//删除文章
router.post('/article/del', function(req, res, next) {
	console.log('删除文章');
	article.del(req, res, next);
});


//查询分类
router.post('/sort/query', function(req, res, next) {
	console.log('查询分类');
	sort.query(req, res, next);
});
//新增/更新分类
router.post('/sort/submit', function(req, res, next) {
	console.log('新增/更新分类');
	sort.submit(req, res, next);
});
//删除分类
router.post('/sort/del', function(req, res, next) {
	console.log('删除分类');
	sort.del(req, res, next);
});
module.exports = router;
