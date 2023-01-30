import { requestArtists } from 'server/modeller'
import type { NextApiRequest, NextApiResponse } from 'next'
import { spotifyArtistsUrl } from 'server/constants';
import { logErrorAndSendResponse } from '@/server/utils';

export default async function getArtists(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {clientToken, nextUrl} = req.body;
    return requestArtists(spotifyArtistsUrl, nextUrl, clientToken)
        .then((artistResponse) => {
        res.status(200).send(artistResponse.data);
        })
        .catch((err) => logErrorAndSendResponse(err, res));
}
