import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { AxiosInstance } from "../../axios/axiosInstance";


export const TweetHook = (tweet) => {
    const { instance } = AxiosInstance();
    const currentUserData = JSON.parse(sessionStorage.getItem('currentUserData'));
    const regexProfile = /\/profile\/\d+/;
    const location = useLocation();

    const [showCommentModal, setShowCommentModal] = useState(false);

    const deleteTweet = useCallback(async () => {
        if (window.confirm('削除してもよろしいですか。')) {
            await instance.delete(`/api/v1/tweets/${tweet.id}`);
            window.location.reload();
        }
    }, [])

    const createRetweet = useCallback(async () => {
        try {
            await instance.post(`/api/v1/tweets/${tweet.id}/retweets`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }, [instance, tweet.id])

    const deleteRetweet = useCallback(async () => {
        try {
            await instance.delete(`/api/v1/tweets/${tweet.id}/retweets`);
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }, [instance, tweet.id])

    return {
        currentUserData,
        regexProfile,
        location,
        deleteTweet,
        showCommentModal,
        setShowCommentModal,
        createRetweet,
        deleteRetweet
    }
}