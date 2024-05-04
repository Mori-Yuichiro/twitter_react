import { useCallback, useEffect, useState } from "react"
import { AxiosInstance } from "../../axios/axiosInstance"
import { useLocation, useNavigate } from "react-router-dom";

export const ProfileAreaHook = (showProfileEditModal) => {
    const { instance } = AxiosInstance();
    const currentUserData = JSON.parse(sessionStorage.getItem('currentUserData'));
    const navigate = useNavigate();
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const userId = pathArray[pathArray.length - 1];
    const [profile, setProfile] = useState({
        user: {
            name: '',
            tweets: [
                {
                    content: ''
                }
            ]
        }
    });

    const [profileTweets, setProfileTweets] = useState([]);

    const getUserProfile = useCallback(async () => {
        try {
            const profileData = await instance.get(`/api/v1/users/${userId}`);
            setProfile(profileData.data);
            setProfileTweets([...profileData.data.user.tweets].reverse());
        } catch (error) {
            console.log(error);
        }
    }, [instance, userId])

    const doGetUserProfile = useCallback(async () => {
        await getUserProfile();
    }, [getUserProfile]);

    useEffect(() => {
        doGetUserProfile();
    }, [showProfileEditModal])

    return {
        currentUserData,
        navigate,
        profile,
        profileTweets,
        userId
    };
}