"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modeller_1 = __importDefault(require("../modeller/modeller"));
const controller_helpers_1 = require("./controller-helpers");
const baseUrl = "https://api.spotify.com/v1";
const spotifyTracksUrl = baseUrl + "/me/tracks";
const spotifyArtistsUrl = baseUrl + "/me/following";
const spotifyUserUrl = baseUrl + "/me";
const spotifyCreatePlaylistUrl = baseUrl + "/users";
const spotifyPlaylistUrl = baseUrl + "/playlists";
const saveTrackRequestLimit = 100; // max number of tracks allowed in a single "save tracks to playlist" request in spotify
const offsetIncrement = 50; // max number of tracks allowed in a single "get saved tracks" request in spotify
const msBetweenTrackRequests = 250;
// TODO: TOKEN TO BE PER USER SESSION RATHER THAN ONE FOR THE WHOLE SERVER: GET USER ID AFTER RECEIVING AUTH TOKEN, SAVE AS ID TOKEN PAIR, SEND BACK USER ID TO CLIENT FOR USE IN SUBSEQUENT REQUESTS
let tokens = "";
// TODO: CHECK ERROR HANDLING IN CATCH METHODS // CREATE CUSTOM HANDLER MIDDLEWARE
// TODO: REFACTOR AXIOS REQUESTS INTO MODELLER
// TODO: separate gettokens/checktokens part as a middleware to be passed through in each request
exports.getTokens = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.body;
    tokens = yield modeller_1.default.requestToken(code, next);
    res.sendStatus(200);
});
exports.getTracks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.body;
    let initialOffset = 0;
    let trackData = [];
    if (!tokens) {
        tokens = yield modeller_1.default.requestToken(code, next);
    }
    function timeOutPromise() {
        return new Promise((resolve) => setTimeout(() => resolve(), msBetweenTrackRequests));
    }
    function fetchTracksAsync(offset) {
        return __awaiter(this, void 0, void 0, function* () {
            let trackBufferResponse;
            try {
                trackBufferResponse = yield modeller_1.default.requestTracks(spotifyTracksUrl, tokens, offset);
            }
            catch (err) {
                console.log("inner error 😎");
                console.log(err.response.status); // 404
                if (err.response.status === 404) {
                    yield timeOutPromise();
                    yield fetchTracksAsync(offset);
                    return;
                }
            }
            trackData = [...trackData, ...trackBufferResponse.data.items];
            console.log("received tracks for offset:", offset);
            if (trackBufferResponse.data.next) {
                offset += offsetIncrement;
                yield fetchTracksAsync(offset);
            }
        });
    }
    try {
        yield fetchTracksAsync(initialOffset);
        console.log("sending " + trackData.length + " tracks");
        res.status = 200;
        res.send(trackData);
    }
    catch (err) {
        console.log("outer error 😎");
        console.log("something went wrong while fetching tracks");
        console.log(err);
        res.sendStatus(500);
    }
});
exports.getArtists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { code, offset, nextUrl } = req.body;
    if (!tokens) {
        tokens = yield modeller_1.default.requestToken(code, next);
    }
    modeller_1.default
        .requestArtists(spotifyArtistsUrl, nextUrl, tokens)
        .then((artistResponse) => {
        res.statusCode = 200;
        res.send(artistResponse.data);
    })
        .catch((err) => console.log(err.response.data));
});
exports.getPlaylistCover = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { code, playlistId } = req.body;
    if (!tokens) {
        tokens = yield modeller_1.default.requestToken(code, next);
    }
    modeller_1.default
        .requestPlaylistCover(spotifyPlaylistUrl, playlistId, tokens)
        .then((coverResponse) => {
        res.statusCode = 200;
        console.log(coverResponse);
        res.send(coverResponse.data);
    })
        .catch((err) => console.log(err.response.data));
});
exports.createPlaylist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { code, playlistName, trackURIs } = req.body;
    if (!tokens) {
        tokens = yield modeller_1.default.requestToken(code, next);
    }
    const userResponse = yield modeller_1.default.requestUser(spotifyUserUrl, tokens);
    const userID = userResponse.data.id;
    const createPlaylistResponse = yield modeller_1.default.requestCreatePlaylist(spotifyCreatePlaylistUrl, playlistName, userID, tokens);
    const playlistData = createPlaylistResponse.data;
    function addTracks(trackArr) {
        return modeller_1.default.requestAddTracks(spotifyPlaylistUrl, playlistData.id, trackArr, tokens);
    }
    // Spotify has a track limit per request, so below we check if multiple requests are necessary (TrackQueue is all the tracks to be added in a queue form, with multiple tracks "shifting" per request.)
    controller_helpers_1.requestWhileQueued(trackURIs, saveTrackRequestLimit, addTracks);
    res.status(200);
    res.send(JSON.stringify(playlistData));
});
