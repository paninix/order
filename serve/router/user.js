const Router = require('koa-router');
const router = new Router();
let User = require('../api/user');

router.post('/login', User.login)

module.exports = router;