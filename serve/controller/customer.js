let mongoose = require('mongoose');
let Customer = mongoose.model('Customer');

module.exports = {
    // 添加一条用户信息
    async addOne(ctx) {
        let data = ctx.request.body;
        let res = await Customer.insertMany(data);
        if(res) {
            ctx.body = {'status':200, 'data': {msg:'信息提交成功'}};
        } else {
            ctx.body = {'status':100, 'data': {msg:'信息提交失败'}};
        }
    },
    // 获取用户基本信息
    async getBaseInfor(ctx) {
        let data = ctx.request.body;
        let res = await Customer.findOne({"baseInfor.phone":data.phone},{baseInfor:1});
        if(res) {
            ctx.body = { 'status':200, 'data': res };
        } else {
            ctx.body = {'status':100, 'data': {msg:'获取基本信息失败'}};
        }
    },
    // 更新用户基本信息
    async updateBaseInfor(ctx) {
        let data = ctx.request.body;
        let res = await Customer.updateOne({_id:data.id},{$set:data.data});
        if(res) {
            ctx.body = {'status':200, 'data': {msg:'信息修改成功'}};
        } else {
            ctx.body = {'status':100, 'data': {msg:'信息修改失败'}};
        }
    }
}