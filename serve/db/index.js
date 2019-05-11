let mongoose = require('mongoose');
const DB_URL = "mongodb://localhost:27017/order";

module.exports = (function(){
    let db=mongoose.connect(DB_URL,{useNewUrlParser:true},err=>{
        if(err) {
            console.log('Connection Error:' + err);
        } else {
            console.log('Connection success!');
        }
    });
    require('../model/user.js');
    require('../model/customer.js');
    require('../model/seller.js');
    require('../model/order.js');
    return db;
})();