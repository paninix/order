const Router = require('koa-router');
const router = new Router();
let Customer = require('../controller/customer');

router.post('/getInfor', Customer.getInfor)
      .post('/addInfor', Customer.addInfor)
      .post('/updateInfor', Customer.updateInfor)

module.exports = router;