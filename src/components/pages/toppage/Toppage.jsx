import { memo, useCallback, useContext, useEffect } from "react";

import { AuthHook } from "../../../hooks/auth/authHook";
import { CookieContext, currentUserContext } from "../../../providers/TwitterProvider";
import { Header } from "../../atoms/toppage/Header";
import { Sidebar } from "../../atoms/toppage/Sidebar";
import { TweetArea } from "../../organisms/TweetArea";
import "../../../style/pages/toppage/Toppage.scss";
import { InputField } from "../../atoms/InputField";
import { Button } from "../../atoms/Button";

export const Toppage = memo(() => {
    const { cookies } = useContext(CookieContext);
    const { currentUserData, setCurrentUserData } = useContext(currentUserContext);

    const { currentUser } = AuthHook();
    const getCurrentUser = useCallback(async () => {
        return await currentUser(cookies);
    }, [cookies, currentUser])

    useEffect(() => {
        if (!currentUserData.is_login) {
            const currentUser = async () => {
                const currentUser = await getCurrentUser();
                setCurrentUserData(currentUser.data);
            }
            currentUser();
        }
    }, [currentUserData.is_login, setCurrentUserData, getCurrentUser])

    return (
        <>
            <div className="toppage">
                <div className="flex-left">
                    <Header />
                    <Sidebar currentUserData={currentUserData} />
                </div>
                <div className="flex-center">
                    <TweetArea />
                </div>
                <div className="flex-right">
                    <InputField placeholder="Search">
                    </InputField>
                    <div className="subscribe-area">
                        <h4>Subscribe to Premium</h4>
                        <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                        <Button>Subscribe</Button>
                    </div>
                    <div className="happening-area">
                        <h4>What's happening</h4>
                        <p>Sports</p>
                        <p>Program</p>
                        <p>React</p>
                        <p>Ruby on Rails</p>
                    </div>
                    <div className="who-to-follow">
                        <h4>Who to follow</h4>
                        <p>Follower1</p>
                        <p>Follower2</p>
                        <p>Follower3</p>
                    </div>
                </div>
            </div>
        </>
    );
})