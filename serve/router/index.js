const Router = require('koa-router');
const router = new Router();

const user = require('./user.js');
const customer = require('./customer.js');
const seller = require('./seller.js');

module.exports = function (app) {
    //路由表
    app.use(router.routes()).use(router.allowedMethods());

    router.use('/api/order/user', user.routes(), user.allowedMethods());
    router.use('/api/order/customer', customer.routes(), customer.allowedMethods());
    router.use('/api/order/seller', seller.routes(), seller.allowedMethods());
}


