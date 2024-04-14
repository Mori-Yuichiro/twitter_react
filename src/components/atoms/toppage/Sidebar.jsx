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

export const Sidebar = ({ currentUserData }) => {
    return (
        <>
            <aside>
                <div className="sidebar-menu">
                    <IconContext.Provider value={{ size: '1.4rem' }}>
                        <AiFillHome />
                        <p>Home</p>
                    </IconContext.Provider>
                </div>
                <div className="sidebar-menu">
                    <IconContext.Provider value={{ size: '1.4rem' }}>
                        <AiOutlineSearch />
                        <p>Explore</p>
                    </IconContext.Provider>
                </div>
                <div className="sidebar-menu">
                    <IconContext.Provider value={{ size: '1.4rem' }}>
                        <IoMdNotificationsOutline />
                        <p>Notification</p>
                    </IconContext.Provider>
                </div>
                <div className="sidebar-menu">
                    <IconContext.Provider value={{ size: '1.4rem' }}>
                        <AiOutlineMail />
                        <p>Message</p>
                    </IconContext.Provider>
                </div>
                <div className="sidebar-menu">
                    <IconContext.Provider value={{ size: '1.4rem' }}>
                        <CiViewList />
                        <p>Lists</p>
                    </IconContext.Provider>
                </div>
                <div className="sidebar-menu">
                    <IconContext.Provider value={{ size: '1.4rem' }}>
                        <BsBookmark />
                        <p>Bookmarks</p>
                    </IconContext.Provider>
                </div>
                <div className="sidebar-menu">
                    <IconContext.Provider value={{ size: '1.4rem' }}>
                        <BsPeople />
                        <p>Communities</p>
                    </IconContext.Provider>
                </div>
                <div className="sidebar-menu">
                    <IconContext.Provider value={{ size: '1.4rem' }}>
                        <FaTwitter />
                        <p>Premium</p>
                    </IconContext.Provider>
                </div>
                <div className="sidebar-menu">
                    <IconContext.Provider value={{ size: '1.4rem' }}>
                        <BsPerson />
                        <p>Profile</p>
                    </IconContext.Provider>
                </div>
                <div className="sidebar-menu">
                    <IconContext.Provider value={{ size: '1.4rem' }}>
                        <CiCircleMore />
                        <p>More</p>
                    </IconContext.Provider>
                </div>
                <Button>Post</Button>
                <div className="name-area">
                    <IconContext.Provider value={{ size: '1.4rem' }}>
                        <BsPerson />
                        <p>{currentUserData.data.name}</p>
                    </IconContext.Provider>
                </div>
            </aside>
        </>
    )
}