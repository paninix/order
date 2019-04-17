const Router = require('koa-router');
const router = new Router();
let User = require('../controller/user');

router.post('/login', User.login)
      .post('/register', User.register)

module.exports = router;