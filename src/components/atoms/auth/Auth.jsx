import { memo, useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { CookieContext } from "../../../providers/TwitterProvider";

export const Auth = memo(({ children }) => {
    const { cookies } = useContext(CookieContext);
    const location = useLocation();
    const regexTweetDetail = /\/tweets\/\d+/;
    const isOnHome = (location.pathname === '/toppage') || regexTweetDetail.test(location.pathname);

    if (!cookies['access-token'] && isOnHome) return <Navigate replace to="/" />;
    if (cookies['access-token'] && isOnHome) return (
        <>
            {children}
        </>
    );
})