/**
 * Created by fujunou on 2015/3/6.
 */
var $err=require('../conf/errInfo.js');
module.exports = {
    extend: function(target, source, flag) {
        for(var key in source) {
            if(source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    },
    formatPara:function(param,obj,res){
        let sqlParams={};
			let state=false;
			for(var item in obj){
				if(obj[item].require && !(item in param)){
					res.json($err.code_1);
				    return false;
				}else{
					sqlParams[item]=param[item]?param[item]:"";
					if(obj[item].require && sqlParams[item]===""){   //必填属性为空直接返回错误信息
						res.json($err[obj[item].code]);
                        return false;
					}
				}
            }
            return sqlParams;

    },

}