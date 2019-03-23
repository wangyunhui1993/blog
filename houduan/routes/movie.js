var https = require("https");
var cheerio = require('cheerio');
var pool = require("../conf/pool.js");
var $util = require("../util/util.js");
var $err = require("../conf/errInfo.js");
var checkAttr = require("./components/checkAttr.js");
var UTFTranslate = require("./components/UTFTranslate.js");
var baseUrl = 'https://v.qq.com';


function callback(html) {
    //使用load方法，参数是刚才获取的html源代码数据
    var $ = cheerio.load(html);
    var arrUrl = [];
    $('.list_item ').each(function(index, element) {
		try{
			let img=$(element).find(".figure_pic")[0].attribs.src;
					let caption=$(element).find(".figure_caption").html();
					let aEle=$(element).find(".figure_title")[0];
					let href=aEle.attribs.href;
					let title=aEle.attribs.title;
			// 		console.log("图片",img);
			// 		console.log("链接",href);
			// 		console.log("标题",title);
			// 		console.log("更新",UTFTranslate.ReChange(caption));
					var item={
						img:img,
						caption:UTFTranslate.ReChange(caption),
						href:href,
						title:title,
					}
			        arrUrl.push(item);
		}catch(e){
			//TODO handle the exception
		}
    });
	return arrUrl;
}


function callback1(html) {
    //使用load方法，参数是刚才获取的html源代码数据
    var $ = cheerio.load(html);
    var arrUrl = [];
    $('.mod_episode .item a').each(function(index, element) {
		try{
			let href=element.attribs.href;
			let num=$(element).html();
					var item={
						href:href,
						num:num,
					}
			        arrUrl.push(item);
		}catch(e){
			//TODO handle the exception
		}
    });
	console.log(arrUrl);
	return arrUrl;
}


module.exports = {
  query: function(req, res, next) {
	// 获取前台页面传过来的参数
	var param = req.body;
	console.log('前台传来的参数', JSON.stringify(param));
	let paramNeedObj = {
		url: {
			require: true,
			name: "链接",
			code: "code_2"
		},
	};
	var data = checkAttr(param, paramNeedObj, res);
	console.log('格式化后的参数', JSON.stringify(data));
	if(data){
		// pool(res, function(connection) {
			var pageUrl = baseUrl+data.url;
			https.get(pageUrl, function(httpsRes) {
				console.log("获取网页");
			    var html = '';
			    httpsRes.on('data', function(data) {
			        html += data;
			    });
			    httpsRes.on('end', function() {
			        //数据获取完，执行回调函数
			        var result = callback(html);
					console.log('结果',result);
					let resInfo = Object.assign ($err.code_0, {list: result});
					res.json (resInfo);
			    });
			});
		// });
	}
  },
  getPlayerList:function(req, res, next){
      // 获取前台页面传过来的参数
      var param = req.body;
      console.log('前台传来的参数', JSON.stringify(param));
      let paramNeedObj = {
      	url: {
      		require: true,
      		name: "链接",
      		code: "code_2"
      	},
      };
      var data = checkAttr(param, paramNeedObj, res);
      console.log('格式化后的参数', JSON.stringify(data));
      if(data){
      	// pool(res, function(connection) {
      		var pageUrl = data.url;
      		https.get(pageUrl, function(httpsRes) {
      			console.log("获取网页");
      		    var html = '';
      		    httpsRes.on('data', function(data) {
      		        html += data;
      		    });
      		    httpsRes.on('end', function() {
      		        //数据获取完，执行回调函数
      		        var result = callback1(html);
      				console.log('结果',result);
      				let resInfo = Object.assign ($err.code_0, {list: result});
      				res.json (resInfo);
      		    });
      		});
      	// });
      }
  },
  
};
