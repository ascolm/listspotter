const { Router } = require('express');
const router = Router();
const controller = require('./controller/controller');

router.post('/tracks', controller.getTracks);

module.exports = router;