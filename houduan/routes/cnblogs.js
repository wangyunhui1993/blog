var https = require('https');
var cheerio = require('cheerio');
var checkAttr = require('./components/checkAttr.js');
var $err = require('../conf/errInfo.js');
var baseUrl = 'https://www.cnblogs.com/wangyunhui/default.html?page=';

var test="https://www.cnblogs.com/wangyunhui/p/7146646.html";


module.exports = {
  query: function(req, res, next) {
	// 获取前台页面传过来的参数
	var param = req.body;
	console.log('前台传来的参数', JSON.stringify(param));
	let paramNeedObj = {
		page: {
			require: true,
			name: "页码",
			code: "code_2"
		},
	};
	var data = checkAttr(param, paramNeedObj, res);
	console.log('格式化后的参数', JSON.stringify(data));
	if(data){
		// pool(res, function(connection) {
			var pageUrl = baseUrl+data.page;
			https.get(pageUrl, function(httpsRes) {
				console.log("获取网页");
			    var html = '';
			    httpsRes.on('data', function(data) {
			        html += data;
			    });
			    httpsRes.on('end', function() {
			        //数据获取完，执行回调函数
			        let result = callback(html);
					console.log('结果',result);
					var resInfo={};
					resInfo = Object.assign ({},$err.code_0, {list: result});
					res.json (resInfo);
			    });
			});
		// });
	}
  },
  queryDetail:function(req, res, next) {
	  	// 获取前台页面传过来的参数
	  var param = req.body;
	  console.log('前台传来的参数', JSON.stringify(param));
	  let paramNeedObj = {
	  	url: {
	  		require: true,
	  		name: "地址",
	  		code: "code_2"
	  	},
	  };
	  var data = checkAttr(param, paramNeedObj, res);
	  console.log('格式化后的参数', JSON.stringify(data));
	  if(data){
	  		var url = data.url;
	  		https.get(url, function(httpsRes) {
	  			console.log("获取网页");
	  		    var html = '';
	  		    httpsRes.on('data', function(data) {
	  		        html += data;
	  		    });
	  		    httpsRes.on('end', function() {
	  		        //数据获取完，执行回调函数
	  		        let result = callback1(html);
					var resInfo={};
					resInfo = Object.assign ({},$err.code_0, {info: result});
	  				res.json (resInfo);
	  		    });
	  		});
	  }
  },
  }



var UTFTranslate = {
	Change: function(pValue) {
		return pValue.replace(/[^\u0000-\u00FF]/g, function($0) {
			return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;")
		});
	},
	ReChange: function(pValue) {
		return unescape(pValue.replace(/&#x/g, '%u').replace(/\\u/g, '%u').replace(/;/g, ''));
	}
};

function callback(html) {
	//使用load方法，参数是刚才获取的html源代码数据
	var $ = cheerio.load(html);
	var titleList = []; //存储标题和链接
	var contentList = []; //存储内容
	var postDesc = []; //存储时间、阅读量等
	$('.postTitle a').each(function(index, element) {
		try {
			console.log(index);
			// 获取标题和链接
			let a = $(element).html();
			var href = element.attribs.href;
			var title = UTFTranslate.ReChange(a);
			// 获取摘要
			var contentEle=$('.postCon .c_b_p_desc');
			$(contentEle[index]).find(".c_b_p_desc_readmore").remove();
			var content=UTFTranslate.ReChange($(contentEle[index]).html());
			// 获取时间、阅读量等
			var descEle=$('.postDesc');
			$(descEle[index]).find("a").remove();
			var desc=UTFTranslate.ReChange($(descEle[index]).html());
			
			var item = {
				href: href,
				title: title,
				content:content,
				desc:desc
			}
			titleList.push(item);
		} catch (e) {
			//TODO handle the exception
			console.log(e);
		}
	});
	console.log(titleList);
	return titleList;
}


function callback1(html) {
	//使用load方法，参数是刚才获取的html源代码数据
	var $ = cheerio.load(html,{
		xml: {
      normalizeWhitespace: true,
	  decodeEntities :true 
    }
	});
	
	var title = UTFTranslate.ReChange($("#cb_post_title_url").html()); //标题
	var content=UTFTranslate.ReChange($("#cnblogs_post_body").html());//内容
	var view=$("#post_view_count").html();//阅读量
	var comment=$("#post_comment_count").html();//评论量
	var date=$("#post-date").html();//发表时间
	var info={
		title:title,
		content:content,
		view:view,
		comment:comment,
		date:date,
		html:html
	}
	console.log(info);
	return info;
}