let mongoose = require('mongoose');

let sellerSchema = new mongoose.Schema({
    baseInfor: Object,       // 基本信息
        //phone: String,      // 手机号码
        //shopname: String,   // 商家名
        //address: String,    // 地址
        //avatar: String,     // 头像
        //canteen: Number,    // 食堂
        //type: Number,       // 类型
        //sale: Number,       // 销量
        //rate: String,       // 评分
    commodity: Object,       // 商品
        // goods: Array,       // 商品
        // goodtypes: Array    // 商品类型
});

mongoose.model('Seller', sellerSchema);