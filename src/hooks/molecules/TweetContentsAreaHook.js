import { useCallback, useState } from "react";

import { AxiosInstance } from "../../axios/axiosInstance"


export const TweetContentsAreaHook = () => {
    const [allTweets, setAllTweets] = useState([]);
    const [offset, setOffset] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const { instance } = AxiosInstance();
    const LIMIT = 10;

    const getAllTweets = useCallback(async () => {
        const tweets = await instance.get(
            '/api/v1/tweets',
            {
                params: {
                    limit: LIMIT,
                    offset: offset
                }
            }
        )
        setAllTweets(tweets.data.tweet);
        setTotalPage(tweets.data.total_page);
    }, [instance, offset])

    const doGetTweets = useCallback(async () => {
        await getAllTweets();
    }, [getAllTweets])

    return { allTweets, LIMIT, offset, setOffset, totalPage, doGetTweets }
}