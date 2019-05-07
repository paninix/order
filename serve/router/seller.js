const Router = require('koa-router');
const router = new Router();
let Seller = require('../controller/seller');

router.post('/getInfor', Seller.getInfor)
      .post('/addInfor', Seller.addInfor)
      .post('/updateInfor', Seller.updateInfor)
      .post('/getList', Seller.getList)
      .post('/updateGoodsList', Seller.updateGoodsList)

module.exports = router;