import { Router } from "express";
const router = Router();
import { getTracks, getTokens, getArtists, createPlaylist, getPlaylistCover} from "./controller/controller";

router.post("/tracks", getTracks);
router.post("/tokens", getTokens);
router.post("/artists", getArtists);
router.post("/create", createPlaylist);
router.post("/cover", getPlaylistCover);

export default router;
