import { TweetDetail } from "../components/pages/detail/TweetDetail";
import { Auth } from '../components/atoms/auth/Auth';
import { Home } from "../components/pages/home/home";
import { Toppage } from "../components/pages/toppage/Toppage";
import { Profile } from "../components/pages/profile/Profile";
import { Notification } from "../components/pages/notification/Notification";

export const TweetRoutes = [
    {
        path: '/',
        exact: true,
        children: <Home />
    },
    {
        path: '/toppage',
        exact: false,
        children: <Auth><Toppage /></Auth>
    },
    {
        path: '/tweets/:id',
        exact: false,
        children: <Auth><TweetDetail /></Auth>
    },
    {
        path: '/profile/:id',
        exact: false,
        children: <Auth><Profile /></Auth>
    },
    {
        path: '/notifications',
        exact: true,
        children: <Auth><Notification /></Auth>
    }
];