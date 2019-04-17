let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    phone: String,   // 账号（手机号码）
    password: String,   // 密码
    identity: String, // 身份（1用户、2商家、3骑手）
});

mongoose.model('User', userSchema);