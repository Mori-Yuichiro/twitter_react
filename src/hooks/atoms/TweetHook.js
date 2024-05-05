import { useLocation } from "react-router-dom";
import { AxiosInstance } from "../../axios/axiosInstance";
import { useCallback } from "react";

export const TweetHook = (tweet) => {
    const { instance } = AxiosInstance();
    const currentUserData = JSON.parse(sessionStorage.getItem('currentUserData'));
    const regexProfile = /\/profile\/\d+/;
    const location = useLocation();

    const deleteTweet = useCallback(async () => {
        if (window.confirm('削除してもよろしいですか。')) {
            await instance.delete(`/api/v1/tweets/${tweet.id}`);
            window.location.reload();
        }
    }, [])

    return {
        currentUserData,
        regexProfile,
        location,
        deleteTweet
    }
}