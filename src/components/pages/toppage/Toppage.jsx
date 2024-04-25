import { memo, useCallback, useContext, useEffect } from "react";

import { AuthHook } from "../../../hooks/auth/authHook";
import { CookieContext, currentUserContext } from "../../../providers/TwitterProvider";
import { Header } from "../../atoms/toppage/Header";
import { Sidebar } from "../../atoms/toppage/Sidebar";
import { TweetArea } from "../../organisms/TweetArea";
import "../../../style/pages/toppage/Toppage.scss";
import { RightSidebar } from "../../atoms/toppage/RightSidebar";

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
                    <RightSidebar />
                </div>
            </div>
        </>
    );
})