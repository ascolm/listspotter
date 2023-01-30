import { requestPlaylistCover } from 'server/modeller'
import type { NextApiRequest, NextApiResponse } from 'next'
import { spotifyPlaylistUrl } from 'server/constants';
import { logErrorAndSendResponse } from '@/server/utils';

export default async function getPlaylistCover(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {clientToken, playlistId} = req.body;
    const coverGenerationWaitTime = 500; // Spotify takes a while to generate playlist cover image after playlist is created

    setTimeout(() => {
      requestPlaylistCover(spotifyPlaylistUrl, playlistId, clientToken)
        .then((coverResponse) => {
          res.status(200).send(coverResponse.data);
        })
        .catch(err => logErrorAndSendResponse(err, res));
    }, coverGenerationWaitTime);
}
