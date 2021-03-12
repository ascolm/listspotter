"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const controller_1 = __importDefault(require("./controller/controller"));
router.post("/tracks", controller_1.default.getTracks);
router.post("/tokens", controller_1.default.getTokens);
router.post("/artists", controller_1.default.getArtists);
router.post("/create", controller_1.default.createPlaylist);
router.post("/cover", controller_1.default.getPlaylistCover);
exports.default = router;
