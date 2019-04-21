const Router = require('koa-router');
const router = new Router();
let Customer = require('../controller/customer');

router.get('/getBaseInfor', Customer.getCustomerBaseInfor)
      .post('/updateBaseInfor', Customer.updateCustomerBaseInfor)

module.exports = router;