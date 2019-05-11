let mongoose = require('mongoose');
let Order = mongoose.model('Order');

module.exports = {
    async addOrder(ctx) {
        let infor = ctx.request.body;
        let res = await Order.insertMany(infor);
        if(res) {
            ctx.body = {'status':200, 'data': {msg:'下单成功'}};
        } else {
            ctx.body = {'status':100, 'data': {msg:'下单失败'}};
        }
    },
    // 获取商家订单信息
    async getSellerOrders(ctx) {
        let sellerId = ctx.request.body;
        let res = await Order.find(sellerId, {sellerInfor:0,sellerId:0});
        if(res) {
            ctx.body = {'status':200, 'data': res};
        } else {
            ctx.body = {'status':100, 'data': {msg:'获取商家订单信息失败'}};
        }
    },
    // 获取用户订单信息
    async getCustomerOrders(ctx) {
        let customerId = ctx.request.body;
        let res = await Order.find(customerId, {customerInfor:0,customerId:0});
        if(res) {
            ctx.body = {'status':200, 'data': res};
        } else {
            ctx.body = {'status':100, 'data': {msg:'获取用户订单信息失败'}};
        }
    }
}