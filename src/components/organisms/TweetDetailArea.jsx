import { memo, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AxiosInstance } from "../../axios/axiosInstance";
import { Tweet } from "../atoms/Tweet";
import { Button } from "../atoms/Button"
import { InputField } from "../atoms/InputField"
import "../../style/organisms/TweetDetailArea.scss";


export const TweetDetailArea = memo(() => {
    const navigate = useNavigate();
    const [tweet, setTweet] = useState({
        user: {
            name: ''
        },
        image_urls: null,
        content: ''
    });
    const { instance } = AxiosInstance();
    const location = useLocation();

    const getTweetDetail = useCallback(async () => {
        const tweetDetail = await instance.get(`/api/v1/${location.pathname}`);
        setTweet(tweetDetail.data.tweet);
    }, [instance, location.pathname])

    const doGetTweetDetail = useCallback(async () => {
        await getTweetDetail();
    }, [getTweetDetail])

    useEffect(() => {
        doGetTweetDetail();
    }, [])

    return (
        <div className="tweet-detail-area">
            <div className="header">
                <FaArrowLeft className="arrow" onClick={() => navigate(-1)} />
                <h4>Post</h4>
            </div>
            <div className="tweet">
                <Tweet tweet={tweet} />
            </div>
            <form action="" className="reply-form">
                <InputField placeholder="Post your comment" />
                <Button>Comment</Button>
            </form>
        </div>
    );
})