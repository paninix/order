let mongoose = require('mongoose');
let Seller = mongoose.model('Seller');

module.exports = {
    // 获取用户基本信息
    async getInfor(ctx) {
        let phone = ctx.query.phone;
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
    }
}