const Router = require('koa-router');
const router = new Router();
let Customer = require('../controller/customer');

router.get('/getBaseInfor', Customer.getCustomerBaseInfor)
      .post('/addOneInfor', Customer.addOneCustomerInfor)
      .post('/updateBaseInfor', Customer.updateCustomerBaseInfor)

module.exports = router;