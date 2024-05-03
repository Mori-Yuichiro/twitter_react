import { FaArrowLeft } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CgWebsite } from "react-icons/cg";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Button } from "../atoms/Button";
import { Tweet } from "../atoms/Tweet";
import { ProfileAreaHook } from "../../hooks/organisms/ProfileAreaHook";
import "../../style/organisms/profile/ProfileArea.scss"


export const ProfileArea = ({ showProfileEditModal, setShowProfileEditModal }) => {
    const { currentUserData, navigate, profile, profileTweets, userId } = ProfileAreaHook(showProfileEditModal);

    return (
        <div className="profile-area">
            <div className="header">
                <FaArrowLeft className="arrow" onClick={() => navigate(-1)} />
                <h4>{profile.user.name}</h4>
            </div>
            <div className="user-profile">
                <div className="header-image">
                    {profile.user.header_image_url && <img src={profile.user.header_image_url} alt="ヘッダー画像" />}
                </div>
                <div className="profile-image">
                    {profile.user.profile_image_url && <img src={profile.user.profile_image_url} alt="プロフィール画像" />}
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
                            <LiaBirthdayCakeSolid />
                            <p>{profile.user.birthday}</p>
                        </div>
                        <div className="location">
                            <CiLocationOn />
                            <p>{profile.user.location}</p>
                        </div>
                        <div className="website">
                            <CgWebsite />
                            <p>{profile.user.website}</p>
                        </div>
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