import { requestPlaylistCover } from 'server/modeller'
import type { NextApiRequest, NextApiResponse } from 'next'
import { spotifyPlaylistUrl } from 'server/constants';
import { logErrorAndSendResponse } from '@/server/utils';

export default async function getPlaylistCover(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {clientToken, playlistId} = req.body;
    console.log('received token: '  + clientToken)
    console.log('received playlistId: '  + playlistId)
    requestPlaylistCover(spotifyPlaylistUrl, playlistId, clientToken)
      .then((coverResponse) => {
        console.log('data from spotify: ')
        console.log(coverResponse.data)
        console.log('status from spotify: ')
        console.log(coverResponse.status)
        console.log(coverResponse.statusText)
        res.status(200).send(coverResponse.data);
      })
      .catch(err => logErrorAndSendResponse(err, res));
}
