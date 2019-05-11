let mongoose = require('mongoose');

let customerSchema = new mongoose.Schema({
    baseInfor: {          // 基本信息
        phone: String,     // 手机号码
        username: String,  // 用户名
        address: String,   // 地址
        count: Number,     // 余额
        avatar: String     // 头像
    }     
       
});

mongoose.model('Customer', customerSchema);