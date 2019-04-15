let mongoose = require('mongoose');
let mongodb = "mongodb://localhost:27017/order";

new Promise(function(reslove, reject){
    mongoose.connect(mongodb,{useNewUrlParser:true}, (err)=>{
        err ? reject(err) : reslove();
    });
}).then(()=>{
    console.log('Connection success!');
}).catch((err)=>{
    console.log('Connection Error:' + err);
});
require('../model/user.js');