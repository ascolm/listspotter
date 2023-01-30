import { requestPlaylistCover } from 'server/modeller'
import type { NextApiRequest, NextApiResponse } from 'next'
import { spotifyPlaylistUrl } from 'server/constants';
import { logErrorAndSendResponse } from '@/server/utils';

export default async function getPlaylistCover(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {clientToken, playlistId} = req.body;

    requestPlaylistCover(spotifyPlaylistUrl, playlistId, clientToken)
      .then((coverResponse) => {
        res.status(200).send(coverResponse.data);
      })
      .catch(err => logErrorAndSendResponse(err, res));
}
