const Router = require('koa-router');
const router = new Router();

const user = require('./user.js');
const customer = require('./customer.js');

module.exports = function (app) {
    //路由表
    app.use(router.routes()).use(router.allowedMethods());

    router.use('/api/order/user', user.routes(), user.allowedMethods());
    router.use('/api/order/customer', customer.routes(), customer.allowedMethods());
}


