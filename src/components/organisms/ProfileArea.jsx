import { useCallback, useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { AxiosInstance } from "../../axios/axiosInstance"
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../atoms/Button";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../../style/organisms/profile/ProfileArea.scss"
import { Tweet } from "../atoms/Tweet";


export const ProfileArea = ({ showProfileEditModal, setShowProfileEditModal }) => {
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
    }, [])

    return (
        <div className="profile-area">
            <div className="header">
                <FaArrowLeft className="arrow" onClick={() => navigate(-1)} />
                <h4>{profile.user.name}</h4>
            </div>
            <div className="user-profile">
                <div className="header-image">
                    {profile.header_image_url && <img src={profile.header_image_url} alt="ヘッダー画像" />}
                </div>
                <div className="profile-image">
                    {profile.profile_image_url && <img src={profile.profile_image_url} alt="プロフィール画像" />}
                </div>
                <div className="bio">
                    <div className="edit-profile-button">
                        {(currentUserData.data.id === Number(userId)) &&
                            <Button onClick={() => setShowProfileEditModal(!showProfileEditModal)}>Edit profile</Button>
                        }
                    </div>
                    <div className="bio-name">
                        <h4>{profile.user.name}</h4>
                    </div>
                    <div className="bio-text">
                        <p>{profile.user.bio}</p>
                    </div>
                    <div className="bio-other-info">
                        <div className="birthday">

                        </div>
                        <div className="location">
                            <CiLocationOn />
                            <p>{profile.user.location}</p>
                        </div>
                        <div className="website"></div>
                    </div>
                    <div className="bio-follow">
                        <p>0 Following</p>
                        <p>0 Followers</p>
                    </div>
                </div>
                <div className="profile-tweet">
                    <Tabs
                        defaultActiveKey="posts"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="posts" title="Posts" />
                        <Tab eventKey="replies" title="Replies" />
                        <Tab eventKey="highlights" title="Highlights" />
                        <Tab eventKey="articles" title="Articles" />
                        <Tab eventKey="media" title="Media" />
                        <Tab eventKey="likes" title="Likes" />
                    </Tabs>
                    <div className="tweet-area">
                        {profileTweets.map((tweet, i) => {
                            return (
                                <div className="tweet" key={i}>
                                    <Tweet tweet={tweet} user={profile.user} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}