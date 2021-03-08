const { Router } = require('express');
const router = Router();
const controller = require('./controller/controller');

router.post('/tracks', controller.getTracks);
router.post('/tokens', controller.getTokens);
router.post('/artists', controller.getArtists);
router.post('/create', controller.createPlaylist);
router.post('/cover', controller.getPlaylistCover);

module.exports = router;