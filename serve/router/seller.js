const Router = require('koa-router');
const router = new Router();
let Seller = require('../controller/seller');

router
.post('/addOne', Seller.addOne)
.post('/getBaseInfor', Seller.getBaseInfor)
.post('/updateBaseInfor', Seller.updateBaseInfor)
.post('/getStoresList', Seller.getStoresList)
.post('/getStoreInfor', Seller.getStoreInfor)
.post('/updateGoodsList', Seller.updateGoodsList)

module.exports = router;