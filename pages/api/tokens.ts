import { requestToken } from 'server/modeller'
import type { NextApiRequest, NextApiResponse } from 'next'
import { logErrorAndSendResponse } from '@/server/utils';

export default async function getTokens(
        req: NextApiRequest,
        res: NextApiResponse
    ) {
    const { code } = req.body;

    try {
        const tokens = await requestToken(code);
        res.status(200).send(tokens.data);
    } catch (err) {
        logErrorAndSendResponse(err, res);
    }
}
