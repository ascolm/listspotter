import { requestAddTracks, requestCreatePlaylist, requestUser } from 'server/modeller'
import type { NextApiRequest, NextApiResponse } from 'next'
import { SAVE_TRACK_REQ_LIMIT, spotifyCreatePlaylistUrl, spotifyPlaylistUrl, spotifyUserUrl } from 'server/constants';
import { logErrorAndSendResponse } from '@/server/utils';

const requestWhileQueued = async (initialQueue: any[], limit: number, handler: (arr: any[]) => any) => {
    let queueArr = initialQueue.slice();
  
    while (queueArr.length > 0) {
      if (queueArr.length < limit) {
        await handler(queueArr);
        queueArr = [];
      } else {
        let tracksToQuery = queueArr.splice(0, limit);
        await handler(tracksToQuery);
      }
    }
  };

export default async function createPlaylist(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {clientToken, playlistName, trackURIs} = req.body;
    let playlistData: any;
    let userID;
    
    function addTracks (trackArr: any[]) {
      return requestAddTracks(spotifyPlaylistUrl, playlistData.id, trackArr, clientToken);
    }

    try {
      const userResponse = await requestUser(spotifyUserUrl, clientToken);
      userID = userResponse.data.id;
    
      const createPlaylistResponse = await requestCreatePlaylist(spotifyCreatePlaylistUrl, playlistName, userID, clientToken);
      playlistData = createPlaylistResponse.data;

      // Spotify has a track limit per request, so below we check if multiple requests are necessary (TrackQueue is all the tracks to be added in a queue form, with multiple tracks "shifting" per request.)
      requestWhileQueued(trackURIs, SAVE_TRACK_REQ_LIMIT, addTracks);
      res.status(200).send(playlistData);
    } catch (err) {
      logErrorAndSendResponse(err, res);
    }
}
