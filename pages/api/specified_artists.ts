import { requestSpecifiedArtists } from 'server/modeller'
import type { NextApiRequest, NextApiResponse } from 'next'
import { MS_BETWEEN_REQUESTS, SPECIFIED_ARTISTS_REQ_LIMIT, spotifyArtistsUrl, spotifySpecifiedArtistsUrl, TRIES_BEFORE_ERROR } from 'server/constants';
import flatten from 'lodash.flatten';
import { logErrorAndSendResponse, timeOutPromise } from 'server/utils';

export default async function getArtists(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {clientToken, artistIds} = req.body;

    const specifiedArtists: any[] = [];
  
    while (artistIds.length > 0) {
      const artistsToQuery = artistIds.splice(0, SPECIFIED_ARTISTS_REQ_LIMIT);
      const queryString = artistsToQuery.join(',');
  
      let tryCount = 0;

      await (async function fetchSpecifiedArtistsAsync () {
        try{
          const specifiedArtistResponse = await requestSpecifiedArtists(spotifySpecifiedArtistsUrl, queryString, clientToken);
          specifiedArtists.push(specifiedArtistResponse.data.artists);
        } catch (err: any) {
          if(err.response.status === 404){
            tryCount++;
            await timeOutPromise(MS_BETWEEN_REQUESTS);
            if (tryCount < TRIES_BEFORE_ERROR) {
              await fetchSpecifiedArtistsAsync();
            } else {
              logErrorAndSendResponse(err, res);
            }
            return;
          }
        }
      })();
    }
  
    res.status(200).send(flatten(specifiedArtists));
}
