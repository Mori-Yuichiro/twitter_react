import { useEffect } from "react"

import "../../style/molecules/TweetContentsArea.scss"
import { Link } from "react-router-dom";
import { TweetContentsAreaHook } from "../../hooks/molecules/TweetContentsAreaHook";

export const TweetContentsArea = () => {
    const { allTweets, LIMIT, offset, setOffset, totalPage, doGetTweets } = TweetContentsAreaHook();

    useEffect(() => {
        doGetTweets();
    }, [offset])

    return (
        <div className="tweet-content">
            <p></p>
            {allTweets.map((tweet, i) => {
                return (
                    <div key={i} className="tweet">
                        <p>{tweet.user.name}</p>
                        <p>{tweet.content}</p>
                        <div className="images">
                            {tweet.image_urls &&
                                tweet.image_urls.map((url, i) => {
                                    return <img key={i} src={url} alt="画像" />
                                })
                            }
                        </div>
                    </div>
                )
            })}
            <div className="pagination">
                {Array.from({ length: totalPage }, (_, i) => {
                    return (offset === i * LIMIT) ? <p key={i + 1}>{i + 1}</p> :
                        <Link
                            key={i + 1}
                            to={`/toppage?limit=${LIMIT}&offset=${i * LIMIT}`}
                            onClick={() => setOffset(i * LIMIT)}
                        >
                            {i + 1}
                        </Link>
                })}
            </div>
        </div>
    )
}