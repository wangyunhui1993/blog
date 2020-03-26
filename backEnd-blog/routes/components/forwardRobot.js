var http = require('http');  
  
var querystring = require('querystring');  
module.exports=function(data,callback){
    // var data = {  
    //     message: msg,  
    //     userId: uid
    // };//这是需要提交的数据  
      
      
    var content = querystring.stringify(data);  
      
    var options = {  
        hostname: 'robot.uixsj.cn',
        port: 80,  
        path: '/server.php?' + content,  
        method: 'GET'  
    };  
      
    var req = http.get(options, function (res) { 
        // console.log('STATUS: ' + res.statusCode);  
        // console.log('HEADERS: ' + JSON.stringify(res.headers));  
        res.setEncoding('utf8');  
        res.on('data', function (chunk) {  
            console.log('BODY: ' + chunk); 
            callback(chunk) ;
        });  
    });  
      
    req.on('error', function (e) {  
        callback(false) ;
    });  
      
    req.end();
}
 