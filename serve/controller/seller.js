let mongoose = require('mongoose');
let Seller = mongoose.model('Seller');

var phone = '';   //商家用户标识

module.exports = {
    // 获取用户基本信息
    async getInfor(ctx) {
        phone = ctx.query.phone;
        let res = await Seller.findOne({phone}, {_id:0});
        if(res) {
            ctx.body = { 'status':200, 'data': res };
        } else {
            ctx.body = {'status':100, 'data': {msg:'获取用户基本信息失败'}};
        }
    },
    // 添加一条用户信息
    async addInfor(ctx) {
        let infor = ctx.request.body;
        if(await Seller.insertMany(infor)) {
            ctx.body = {'status':200, 'data': {msg:'用户信息提交成功'}};
        } else {
            ctx.body = {'status':100, 'data': {msg:'用户信息提交失败'}};
        }
    },
    // 更新用户基本信息
    async updateInfor(ctx) {
        let seller = ctx.request.body;
        if(await Seller.updateOne(seller)) {
            ctx.body = {'status':200, 'data': {msg:'用户信息修改成功'}};
        } else {
            ctx.body = {'status':100, 'data': {msg:'用户信息修改失败'}};
        }
    },
    // 客户端获取商家列表
    async getList(ctx) {
        let condition = ctx.request.body;
        let search = {};
        if(condition.type) {
            search.type = condition.type;
        }
        if(condition.canteen) {
            search.canteen = condition.canteen;
        }
        let res = await Seller.find(search);
        if(res) {
            ctx.body = { 'status':200, 'data': res };
        } else {
            ctx.body = {'status':100, 'data': {msg: '获取商家列表信息失败'}};
        }
    },
    // 商家端更新商品列表
    async updateGoodsList(ctx) {
        let goodsList = ctx.request.body;
        let res = await Seller.updateOne({phone},{$set:goodsList});
        if(res) {
            ctx.body = { 'status':200, 'data': {msg: '商品信息更新成功'} };
        } else {
            ctx.body = { 'status':100, 'data': {msg: '商品信息更新失败'} };
        }
    }
}