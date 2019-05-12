const Router = require('koa-router');
const router = new Router();
let Seller = require('../controller/seller');

router
.post('/addOne', Seller.addOne)
.post('/getOne', Seller.getOne)
.post('/updateBaseInfor', Seller.updateBaseInfor)
.post('/updateCommodity', Seller.updateCommodity)
.post('/getStoresList', Seller.getStoresList)
.post('/getStoreInfor', Seller.getStoreInfor)

module.exports = router;