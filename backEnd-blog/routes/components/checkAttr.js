var $err = require ('../../conf/errInfo.js');
module.exports = function (param, paramNeedObj,res) {
	console.log(param,paramNeedObj);
  let sqlParams = {};
  for (var item in paramNeedObj) {
	  
		//如果属性为必填属性并且前台没有传过来直接返回false并打断循环。
    if (paramNeedObj[item].require && !(item in param)) {                                                                                                                                                               
      break;
	  //必填属性缺少直接返回错误信息
	  res.json ($err.code_1);
      return false;
    } 
    else {
		
      sqlParams[item] = param[item] ? param[item] : '';
//       if (paramNeedObj[item].require && sqlParams[item] === '') {
//         break;
//         return false;
//       }

    }
  }
  return sqlParams;
};
