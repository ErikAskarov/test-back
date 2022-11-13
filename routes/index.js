const Router = require('express');
const router = new Router();
const messageRouter = require('./messageRouter');
const sessionRouter = require('./sessionRouter');

router.use('/message', messageRouter);
router.use('/session', sessionRouter);

module.exports = router