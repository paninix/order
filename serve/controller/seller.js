let mongoose = require('mongoose');
let Seller = mongoose.model('Seller');

module.exports = {
    // 获取用户基本信息
    async getInfor(ctx) {
        let phone = ctx.request.body;
        let res = await Seller.findOne(phone);
        if(res) {
            ctx.body = { 'status':200, 'data': res };
        } else {
            ctx.body = {'status':100, 'data': {msg:'获取用户基本信息失败'}};
        }
    },
    // 添加一条用户信息
    async addInfor(ctx) {
        let infor = ctx.request.body;
        let res = await Seller.insertMany(infor);
        if(res) {
            ctx.body = {'status':200, 'data': {msg:'用户信息提交成功'}};
        } else {
            ctx.body = {'status':100, 'data': {msg:'用户信息提交失败'}};
        }
    },
    // 更新用户基本信息
    async updateInfor(ctx) {
        let seller = ctx.request.body;
        let res = await Customer.updateOne({phone:seller.phone},{$set:seller});
        if(res) {
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
        let data = ctx.request.body;
        let res = await Seller.updateOne({phone:data.phone},{$set:data.data});
        if(res) {
            ctx.body = { 'status':200, 'data': {msg: '商品信息更新成功'} };
        } else {
            ctx.body = { 'status':100, 'data': {msg: '商品信息更新失败'} };
        }
    }
}