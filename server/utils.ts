import axios from "axios";
import { NextApiResponse } from "next";

export const timeOutPromise = (timeBetweenRequests: number) => {
    return new Promise((resolve) => setTimeout(() => resolve(''), timeBetweenRequests));
};

export const logError = (error: any) => {
    console.log('Error fetching data');
    if (axios.isAxiosError(error)) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data)
            console.log(error.response.status)
            return;
        }
        if (error.request) {
            // The request was made but no response was received
            console.log(error.request)
            return;
        }
        if (error.message) {
            // Something happened in setting up the request that triggered an Error
            console.log(error.message)
            return;
        }
    }
    return;
}

export const logErrorAndSendResponse = (error: any, res: NextApiResponse) => {
    logError(error);
    res.status(418).send('');
}