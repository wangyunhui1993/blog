var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

//在项目开发中我们常需要给某些数据定义一个唯一标识符，便于寻找，关联node-uuid模块（node-uuid模块）
let uuid = require("node-uuid");
let session = require('express-session');

var routes = require('./routes/index');

var app = express();


app.get('/uploads/*', function (req, res) {
    res.sendFile( __dirname + "/" + req.url );
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use((req, res, next) => {
	// 允许的请求主机名及端口号 也可以用通配符*， 表示允许所有主机请求
	res.setHeader('Access-Control-Allow-Origin', '*');
	// 允许请求携带cookie 
	res.setHeader('Access-Control-Allow-Credentials', true);
    // 允许的请求方式
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // 允许的请求头
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	next();
});

//app.use(cors());
app.use(cors({
    origin:['http://localhost:9000'],
    methods:['GET','POST'],
    alloweHeaders:['Conten-Type', 'Authorization']
}));



//设置路由
//app.use('/',authoizationMiddleware, routes);   //设置拦截器
app.use('/', routes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




// set session
app.use(session({
    genid: function (req) {
        return genuuid();
    },
    resave: true,
    saveUninitialized: true,
    secret: 'uwotm8',
    // TODO : 确定是否设置maxAge
    cookie: {httpOnly: true, secure: false},
    name: "my-session-id",
    // 每次请求，自动更新cookie的过期时间
    rolling: true
}));
app.use(express.static(path.join(__dirname, 'dest'), {
    maxAge: 30000000
}));
function authoizationMiddleware(req, res, next) {
		console.log("拦截器 session",req.session);
//  let {uid} = req.session;
    console.log(typeof req.session);
    if (typeof uid === 'undefined') {
    		console.log("没有session");
        res.status(301).redirect('/');
    } else {
        next();
    }
}
function genuuid() {
    return uuid.v4();
}



var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})


module.exports = app;
