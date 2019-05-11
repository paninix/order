const Router = require('koa-router');
const router = new Router();
let Order = require('../controller/Order');

router.post('/addOrder', Order.addOrder)
      .post('/getSellerOrders', Order.getSellerOrders)
      .post('/getCustomerOrders', Order.getCustomerOrders)

module.exports = router;