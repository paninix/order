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
        let baseInfor = null;
        switch(res.identity) {
            // 客户端登录
            case '1': {
                baseInfor = await Customer.findOne({phone:user.phone});
            }
        }
        if(baseInfor) {
            ctx.body = {
                'status':200, 
                'data': {
                    msg:'登录成功', 
                    data: {
                        identity: res.identity,
                        baseInfor
                    }
            }};
        } else {
            ctx.body = {'status':100, 'data': {msg:'获取用户信息失败'}};
        }
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
        let colleaction = null, data = {};
        switch(user.identity) {
            //客户端注册
            case '1':  {
                colleaction = Customer;
                data = {
                    phone: user.phone,   // 账号（手机号码）
                    username: 'panini', // 用户名
                    address: '19#504', // 地址
                    count: 0, // 余额
                    avatar: '../../assets/imgs/avatar.png' // 头像
                };
                break;
            }   
        }
        if(await colleaction.insertMany(data)) {
            ctx.body = {'status':200, 'data': {msg:'注册成功', identity: user.identity}};
        } else {
            ctx.body = {'status':100, 'data': {msg:'用户信息初始化失败'}};
        }
    }
}