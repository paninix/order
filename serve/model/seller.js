let mongoose = require('mongoose');

let sellerSchema = new mongoose.Schema({
    phone: String,  // 账号（手机号码）
    shopname: String,   // 商家名
    address: String,    // 地址
    avatar: String,     // 头像
    canteen: Number,    // 食堂
    type: Number,       // 类型
    sale: Number,       // 销量
    rate: String        // 评分
});

mongoose.model('Seller', sellerSchema);