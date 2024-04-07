import { memo, useCallback, useContext, useEffect } from "react";
import { AuthHook } from "../../../hooks/auth/authHook";
import { CookieContext, currentUserContext } from "../../../providers/TwitterProvider";

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
        <p>Name: {currentUserData.data.name}</p>
    );
})