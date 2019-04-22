let mongoose = require('mongoose');
let User = mongoose.model('User');
let Customer = mongoose.model('Customer');

module.exports =  {
    async login(ctx) {
        let user = ctx.request.body;
        let res = await User.findOne(user);
        if(!res) {
            ctx.body = {'status':100, 'data': {msg:'用户名或密码错误'}};
            return;
        }
        ctx.body = {'status':200, 'data': {msg:'登录成功', data: res.status}};
    },
    async register(ctx) {
        let user = ctx.request.body;
        if(await User.findOne({phone:user.phone})) {
            ctx.body = {'status':100, 'data': {msg:'该手机号已经被注册'}};
            return;
        }
        if(!await User.insertMany(user)) {
            ctx.body = {'status':100, 'data': {msg:'注册失败'}};
            return;
        }
        ctx.body = {'status':200, 'data': {msg:'注册成功'}};
    }
}