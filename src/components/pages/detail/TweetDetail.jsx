import { useContext } from "react";
import { RightSidebar } from "../../atoms/toppage/RightSidebar"
import { Sidebar } from "../../atoms/toppage/Sidebar"
import { currentUserContext } from "../../../providers/TwitterProvider";
import { Header } from "../../atoms/toppage/Header";
import { TweetDetailArea } from "../../organisms/TweetDetailArea";
import "../../../style/pages/detail/TweetDetail.scss";

export const TweetDetail = () => {
    const { currentUserData } = useContext(currentUserContext);

    return (
        <div className="tweet-detail">
            <div className="flex-left">
                <Header />
                <Sidebar currentUserData={currentUserData} />
            </div>
            <div className="flex-center">
                <TweetDetailArea />
            </div>
            <div className="flex-right">
                <RightSidebar />
            </div>
        </div>
    )
}