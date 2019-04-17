let mongoose = require('mongoose');
let User = mongoose.model('User');

module.exports =  {
    async login(ctx) {
        let user = ctx.request.body;
        let res = await User.findOne(user);
        if(res) {
            ctx.body = {'status':200, 'data': {msg:'登录成功', identity: res.identity}};
        } else {
            ctx.body = {'status':100, 'data': {msg:'用户名或密码错误'}};
        }
    },
    async register(ctx) {
        let user = ctx.request.body;
        let isRegister = await User.findOne({username:user.username});
        if(isRegister) {
            ctx.body = {'status':100, 'data': {msg:'该手机号已经被注册'}};
            return;
        }
        let res = await User.insertMany(user);
        if(res) {
            ctx.body = {'status':200, 'data': {msg:'注册成功', identity: user.identity}};
        } else {
            ctx.body = {'status':100, 'data': {msg:'注册失败'}};
        }
    }
}