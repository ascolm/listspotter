import { spotifyBaseUrl } from "./config";

export const TRIES_BEFORE_ERROR = 10;
export const SAVE_TRACK_REQ_LIMIT = 100; // max number of tracks allowed in a single "save tracks to playlist" request in spotify
export const OFFSET_INCREMENT = 50; // max number of tracks allowed in a single "get saved tracks" request in spotify
export const SPECIFIED_ARTISTS_REQ_LIMIT = 50; // max number of tracks allowed in a single "get saved tracks" request in spotify
export const MS_BETWEEN_REQUESTS = 250; // used for track requests and specified artist requests

export const baseUrl = spotifyBaseUrl;
export const spotifyTracksUrl = baseUrl + '/me/tracks';
export const spotifyArtistsUrl = baseUrl + '/me/following';
export const spotifySpecifiedArtistsUrl = baseUrl + '/artists';
export const spotifyUserUrl = baseUrl + '/me';
export const spotifyCreatePlaylistUrl = baseUrl + '/users';
export const spotifyPlaylistUrl = baseUrl + '/playlists';
