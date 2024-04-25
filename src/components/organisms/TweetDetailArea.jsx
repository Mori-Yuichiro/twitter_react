import { memo } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Tweet } from "../atoms/Tweet";
import { Button } from "../atoms/Button"
import { InputField } from "../atoms/InputField"
import { TweetDetailAreaHook } from "../../hooks/organisms/TweetDetailAreaHook";
import "../../style/organisms/TweetDetailArea.scss";


export const TweetDetailArea = memo(() => {
    const { tweet, navigate } = TweetDetailAreaHook();

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