let mongoose = require('mongoose');
let User = mongoose.model('User');

module.exports =  {
    async login(ctx){
        let user = ctx.request.body;
        User.find({},(err,res)=>{
            if(err) {
                console.log("err:"+err);
            } else {
                console.log("res:"+res);
            }
        });
        // User.findOne(user,(err,res)=>{
        //     if(err) {
        //         console.log("err:"+err);
        //     } else {
        //         console.log("res:"+res);
        //     }
        // });
    }
}