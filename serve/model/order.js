let mongoose = require('mongoose');

let orderSchema = new mongoose.Schema({
    customerInfor: Object,  // 用户基本信息
    sellerInfor: Object,    // 商家基本信息
    customerId: String,     // 用户ID
    sellerId: String,       // 商家ID
    total: Number,          // 总额
    goods: Object,          // 商品
    status: Number,         // 0 订单完成 1 下单 2 商家接单 3 商家出餐 4 骑手取餐 5 订单送达
    time: Number            // 下单时间
});

mongoose.model('Order', orderSchema);