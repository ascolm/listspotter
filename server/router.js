const { Router } = require('express');
const router = Router();
const controller = require('./controller/controller');

router.post('/tracks', controller.getTracks);
router.post('/artists', controller.getArtists);

module.exports = router;