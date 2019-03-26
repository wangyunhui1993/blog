var https = require("https");
var cheerio = require('cheerio');
var pool = require("../conf/pool.js");
var $util = require("../util/util.js");
var $err = require("../conf/errInfo.js");
var checkAttr = require("./components/checkAttr.js");
var UTFTranslate = require("./components/UTFTranslate.js");
var baseUrl = 'https://m.v.qq.com';


function callback(html) {  //格式化电影列表
    //使用load方法，参数是刚才获取的html源代码数据
    var $ = cheerio.load(html);
    var arrUrl = [];
    $('.list_item .open_video').each(function(index, element) {
		
		try{
			
			let href=element.attribs.href;
			
			let img=$(element).find(".item_content img")[0].attribs.dsrc;
					let caption=$(element).find(".item_count").html();
					try{
						caption=UTFTranslate.ReChange(caption);
					}catch(e){
						caption="";
						//TODO handle the exception
					}
					
					
					let title=$(element).find(".item_title").html();
					title=UTFTranslate.ReChange(title);

			// 		console.log("图片",img);
			// 		console.log("链接",href);
			// 		console.log("标题",title);
			// 		console.log("更新",UTFTranslate.ReChange(caption));
					var item={
						img:img,
						caption:caption,
						href:href,
						title:title,
					}
					// console.log(item);
			        arrUrl.push(item);
		}catch(e){
			console.log(e);
			//TODO handle the exception
		}
    });
	return arrUrl;
}


function callback1(html) {      //格式化剧集列表
    //使用load方法，参数是刚才获取的html源代码数据
    var $ = cheerio.load(html);
    var arrUrl = [];
    $('.mod_bd>.mod_episodes_numbers>._list>.item').each(function(index, element) {
		console.log(index);
		try{
			let vid=element.attribs.vid;
			let aEle=$(element).find(".U_color_b");
			
			let href=aEle[0].attribs.href;
			let mark=aEle.find("i").html();  //获取会员或者预告
			var num=aEle.html();
			console.log('判断',mark);
			if(mark && UTFTranslate.ReChange(mark)==='预'){
			}else {
				if(mark && UTFTranslate.ReChange(mark)==='会员'){
					console.log("会员");
					let ele=aEle;
					ele.find("i").remove()
					num = UTFTranslate.ReChange($(ele).html())
					// console.log($(ele).html());
				}
					console.log("平常");
					var item={
						href:href,
						num:num,
						vid:vid
					}
					arrUrl.push(item);
				}
		}catch(e){
			console.log(e);
			//TODO handle the exception
		}
    });
	// console.log(arrUrl);
	return arrUrl;
}



function callback2(html) {      //格式化搜索列表
    //使用load方法，参数是刚才获取的html源代码数据
    var $ = cheerio.load(html);
    var arrUrl = [];
    $('.search_result>.search_item>.figure').each(function(index, element) {
		console.log(index);
		try{
			let href=element.attribs.href;
			let img=$(element).find(".figure_pic .figure_pic_inner img")[0].attribs.dsrc;
			let figure=$(element).find(".figure_info .figure_head .figure_title");
			let title=$(figure).find(".hl").remove().html();
			let type=$(figure).html();
			// title=UTFTranslate.ReChange(title);
// 			if(mark && UTFTranslate.ReChange(mark)==='预'){
// 			}else {
// 				if(mark && UTFTranslate.ReChange(mark)==='会员'){
// 					console.log("会员");
// 					let ele=aEle;
// 					ele.find("i").remove()
// 					num = UTFTranslate.ReChange($(ele).html())
// 					// console.log($(ele).html());
// 				}
// 					console.log("平常");
					var item={
						href:href,
						img:img,
						title:title,
						type:type
					}
					arrUrl.push(item);
// 				}
		}catch(e){
			console.log(e);
			//TODO handle the exception
		}
    });
	// console.log(arrUrl);
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
      		var pageUrl = "https:"+data.url;
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
  searchMovie:function(req, res, next){
	  // 获取前台页面传过来的参数
	  var param = req.body;
	  console.log('前台传来的参数', JSON.stringify(param));
	  let paramNeedObj = {
	  	keyWord: {
	  		require: true,
	  		name: "关键字",
	  		code: "code_2"
	  	},
	  };
	  var data = checkAttr(param, paramNeedObj, res);
	  console.log('格式化后的参数', JSON.stringify(data));
	  if(data){
	  	// pool(res, function(connection) {
	  		var pageUrl = baseUrl+"/search.html?keyWord="+encodeURI(data.keyWord);
			
			// var pageUrl="https://m.v.qq.com/search.html?keyWord=%E5%80%9A%E5%A4%A9%E5%B1%A0%E9%BE%99%E8%AE%B0"
			// console.log("请求的地址：",pageUrl);
	  		https.get(pageUrl, function(httpsRes) {
	  			console.log("获取网页");
	  		    var html = '';
	  		    httpsRes.on('data', function(data) {
	  		        html += data;
	  		    });
	  		    httpsRes.on('end', function() {
	  		        //数据获取完，执行回调函数
	  		        var result = callback2(html);
	  				console.log('结果',result);
	  				let resInfo = Object.assign ($err.code_0, {list: result});
	  				res.json (resInfo);
	  		    });
	  		});
	  	// });
	  }
  },
  
};
