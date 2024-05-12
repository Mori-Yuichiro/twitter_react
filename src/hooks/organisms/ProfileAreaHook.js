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

    // クエリパラメータをtabのデフォルトキーに設定
    const search = useLocation().search;
    const query = new URLSearchParams(search);
    const defaultTab = (query.get('tab') === null) ? 'posts' : query.get('tab');

    const [selectTab, setSelectTab] = useState(defaultTab);

    const [profileTweets, setProfileTweets] = useState([]);
    const [profileComments, setProfileComments] = useState([]);

    const getUserProfile = useCallback(async () => {
        try {
            const profileData = await instance.get(`/api/v1/users/${userId}`);
            setProfile(profileData.data);
            setProfileTweets([...profileData.data.user.tweets].reverse());
            setProfileComments([...profileData.data.user.comments].reverse());
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

    const onSelectTab = useCallback((tab) => {
        setSelectTab(tab);
        navigate(`/profile/${profile.user.id}?tab=${tab}`);
    }, [navigate, profile.user.id])

    return {
        currentUserData,
        navigate,
        profile,
        profileTweets,
        userId,
        selectTab,
        profileComments,
        defaultTab,
        onSelectTab
    };
}