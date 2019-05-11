const Router = require('koa-router');
const router = new Router();
let Customer = require('../controller/customer');

router
.post('/addOne', Customer.addOne)
.post('/getBaseInfor', Customer.getBaseInfor)
.post('/updateBaseInfor', Customer.updateBaseInfor)

module.exports = router;