import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../../style/atoms/tweet/Tweet.scss"
import { TweetHook } from "../../hooks/atoms/TweetHook";

export const Tweet = ({ tweet, user }) => {
    const {
        currentUserData,
        regexProfile,
        location,
        deleteTweet
    } = TweetHook(tweet);

    return (
        <>
            <div className="tweet-name-dots">
                <Link to={`/profile/${user.id}`}>
                    <p>{user.name}</p>
                </Link>
                {(regexProfile.test(location.pathname) && currentUserData.data.id === user.id) && <HiDotsHorizontal onClick={deleteTweet} />}
            </div>
            <Link to={`/tweets/${tweet.id}`}>
                <p className="tweet-text">{tweet.content}</p>
                <div className="images">
                    {tweet.image_urls &&
                        tweet.image_urls.map((url, i) => {
                            return <img key={i} src={url} alt="画像" />
                        })
                    }
                </div>
            </Link >
            <div className="icon-area">
                <HiOutlineChatBubbleLeft />
                <AiOutlineRetweet />
                <CiHeart />
                <CiBookmark />
            </div>
        </>
    );
}