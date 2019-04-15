let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    userId: String,  // 用户id
    username: String,   // 用户名
    password: String,   // 密码
    identity: String, // 身份（1用户、2商家、3骑手）
});

mongoose.model('User', userSchema);