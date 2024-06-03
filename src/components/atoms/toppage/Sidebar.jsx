import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { BsBookmark } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";

import '../../../style/atoms/toppage/Sidebar.scss'
import { Button } from "../Button";
import { Link } from "react-router-dom";

export const Sidebar = ({ currentUserData }) => {
    const ITEM_LIST = [
        { label: "Home", icon: <AiFillHome /> },
        { label: "Explore", icon: <AiOutlineSearch /> },
        { label: "Notification", icon: <IoMdNotificationsOutline /> },
        { label: "Message", icon: <AiOutlineMail /> },
        { label: "Lists", icon: <CiViewList /> },
        { label: "Bookmarks", icon: <BsBookmark /> },
        { label: "Communities", icon: <BsPeople /> },
        { label: "Premium", icon: <FaTwitter /> },
        { label: "Profile", icon: <BsPerson /> },
        { label: "More", icon: <CiCircleMore /> },
    ];

    return (
        <aside>
            {ITEM_LIST.map((item, i) => {
                return (
                    <div key={i} className="sidebar-menu">
                        <IconContext.Provider value={{ size: '1.4rem' }}>
                            {item.icon}
                            {(item.label === 'Home') ? (
                                <Link to='/toppage'><p>{item.label}</p></Link>
                            ) : (item.label === 'Profile') ? (
                                <Link to={`/profile/${currentUserData.data.id}`}><p>{item.label}</p></Link>
                            ) : (item.label === 'Notification') ? (
                                <Link to='/notifications'><p>{item.label}</p></Link>
                            ) : (item.label === 'Message') ? (
                                <Link to='/groups'><p>{item.label}</p></Link>
                            ) : (item.label === 'Bookmarks') ? (
                                <Link to='/bookmarks'><p>{item.label}</p></Link>
                            ) : (<Link to={`/${item.label}`}><p>{item.label}</p></Link >
                            )}
                        </IconContext.Provider>
                    </div>
                );
            })}
            <Button>Post</Button>
            <div className="name-area">
                <IconContext.Provider value={{ size: '1.4rem' }}>
                    <BsPerson />
                    <p>{currentUserData.data.name}</p>
                </IconContext.Provider>
            </div>
        </aside>
    )
}