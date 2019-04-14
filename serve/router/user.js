const Router = require('koa-router');
// const api = require('../api/');
const router = new Router();

router
.post('/login',async(ctx)=>{
    let user = ctx.request.body;
    console.log(user);
})
.get('/infor',async(ctx)=>{
});

module.exports = router;