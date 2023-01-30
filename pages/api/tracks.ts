import { requestTracks } from 'server/modeller'
import type { NextApiRequest, NextApiResponse } from 'next'
import { spotifyTracksUrl } from 'server/constants';
import { logErrorAndSendResponse } from 'server/utils';

export default async function getTracks(
        req: NextApiRequest,
        res: NextApiResponse
    ) {
      const {clientToken, offset} = req.body;
      return requestTracks(spotifyTracksUrl, clientToken, offset)
      .then((trackResponse) => {
      res.status(200).send(trackResponse.data);
      })
      .catch((err) => logErrorAndSendResponse(err, res));
}

export const config = {
  api: {
    responseLimit: false,
  }
}
