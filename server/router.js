import { Router } from 'express';
const router = Router();
import controller from './controller/controller.js';

router.post('/tracks', controller.getTracks);
router.post('/tokens', controller.getTokens);
router.post('/artists', controller.getArtists);
router.post('/create', controller.createPlaylist);
router.post('/cover', controller.getPlaylistCover);

module.exports = router;
