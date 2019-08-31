const mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://39.107.97.170:27017/articles', {useNewUrlParser: true});

let a = mongoose.Collection('article');
console.log(a);