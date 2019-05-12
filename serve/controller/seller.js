let mongoose = require('mongoose');
let Seller = mongoose.model('Seller');

module.exports = {
    // 添加一条商家信息
    async addOne(ctx) {
        let data = ctx.request.body;
        let res = await Seller.insertMany(data);
        if(res) {
            ctx.body = {'status':200, 'data': {msg:'信息提交成功'}};
        } else {
            ctx.body = {'status':100, 'data': {msg:'信息提交失败'}};
        }
    },
    // 获取商家信息
    async getOne(ctx) {
        let data = ctx.request.body;
        let res = await Seller.findOne({"baseInfor.phone":data.phone});
        if(res) {
            ctx.body = { 'status':200, 'data': res };
        } else {
            ctx.body = {'status':100, 'data': {msg:'信息获取失败'}};
        }
    },
    // 更新商家基本信息
    async updateBaseInfor(ctx) {
        let data = ctx.request.body;
        let res = await Seller.updateOne({_id:data.id},{$set:data.data});
        if(res) {
            ctx.body = {'status':200, 'data': {msg:'信息更新成功'}};
        } else {
            ctx.body = {'status':100, 'data': {msg:'信息更新失败'}};
        }
    },
    // 更新商品列表
    async updateCommodity(ctx) {
        let data = ctx.request.body;
        let res = await Seller.updateOne({_id:data.id},{$set:data.data});
        if(res) {
            ctx.body = { 'status':200, 'data': {msg: '商品信息更新成功'} };
        } else {
            ctx.body = { 'status':100, 'data': {msg: '商品信息更新失败'} };
        }
    },
    // 客户端获取商家列表
    async getStoresList(ctx) {
        let data = ctx.request.body;
        let selected = {};
        if(data.type) {
            selected["baseInfor.type"] = data.type;
        }
        if(data.canteen) {
            selected["baseInfor.canteen"] = data.canteen;
        }
        let res = await Seller.find(selected,{baseInfor:1});
        if(res) {
            ctx.body = { 'status':200, 'data': res };
        } else {
            ctx.body = {'status':100, 'data': {msg: '获取商家列表信息失败'}};
        }
    },
    // 客户端获取商家店铺信息
    async getStoreInfor(ctx) {
        let data = ctx.request.body;
        let res = await Seller.findOne({_id:data.id});
        if(res) {
            ctx.body = { 'status':200, 'data': res };
        } else {
            ctx.body = {'status':100, 'data': {msg:'获取商家店铺信息失败'}};
        }
    }
}