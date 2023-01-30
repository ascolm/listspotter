import { requestTracks } from 'server/modeller'
import type { NextApiRequest, NextApiResponse } from 'next'
import { MS_BETWEEN_REQUESTS, spotifyTracksUrl, TRIES_BEFORE_ERROR, OFFSET_INCREMENT } from 'server/constants';
import { logError, timeOutPromise } from 'server/utils';

export default async function getTracks(
        req: NextApiRequest,
        res: NextApiResponse
    ) {
      const {clientToken} = req.body;
      let initialOffset = 0;
      let trackData: any[] = [];
    
      let tryCount = 0;
    
      async function fetchTracksAsync (offset: number) {
        let trackBufferResponse;
    
        try{
          trackBufferResponse = await requestTracks(spotifyTracksUrl, clientToken, offset);
        } catch (err: any) {
          if(err.response.status === 404){
            tryCount++;
            await timeOutPromise(MS_BETWEEN_REQUESTS);
            if (tryCount < TRIES_BEFORE_ERROR) {
              await fetchTracksAsync (offset);
            } else {
              logError(err);
              throw new Error;
            }
            return;
          }
        }
    
        trackData = [...trackData, ...trackBufferResponse?.data.items];
    
        if (trackBufferResponse?.data.next) {
          offset += OFFSET_INCREMENT;
          await fetchTracksAsync (offset)
        }
      };
    
      try {
        await fetchTracksAsync(initialOffset);
        res.status(200).send(trackData);
      } catch (err) {
        res.status(418);
      }
}

export const config = {
  api: {
    responseLimit: false,
  },
}
