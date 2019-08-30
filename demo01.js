const mongoose = require('mongoose');
var Schema = mongoose.Schema
//连接数据库
mongoose.connect('mongodb://39.107.97.170:27017/itcast', {useNewUrlParser: true});

//设计数据库结构
var user_schema = new Schema({
    username:{
        type:String,
        required: true
    },

    password:{
        type:String,
        required:true
    },
    email:{
        type:String
    }
  });   
//将自定义的数据库结构注册为模型
//第一个参数尽量为大写单数字符串
//返回值：模型构造函数
var user = mongoose.model('User',user_schema);