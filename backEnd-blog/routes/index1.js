var express = require('express');
var app = express();

var article = require("./blog/index.js")
console.log('articlearticlearticlearticlearticlearticle',article);
//设置路由
app.use('/article', article);