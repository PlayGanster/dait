import { RouterNavBarType, RouterType } from "@/types/types";
import React from "react";
import { BsChatSquareTextFill } from "react-icons/bs";
import { FaMapPin, FaTasks, FaUserFriends } from "react-icons/fa";
import { RiHomeSmileFill } from "react-icons/ri";

export const RouterNavBar: RouterNavBarType[] = [
    {
        id: 1,
        path: "/",
        icon: RiHomeSmileFill,
        name: "Главная",
        active: false,
    }, {
        id: 2,
        path: "/friends",
        icon: FaUserFriends,
        name: "Друзья",
        active: false
    }, {
        id: 3,
        path: "/chats",
        icon: BsChatSquareTextFill,
        name: "Чаты",
        active: false
    }, {
        id: 4,
        path: "/tasks",
        icon: FaTasks,
        name: "Задания",
        active: false
    }, {
        id: 5,
        path: "/map",
        icon: FaMapPin,
        name: "Карта",
        active: false
    }
]

const HomePage = React.lazy(() => import("@pages/home/home"));
const SettingsPage = React.lazy(() => import("@pages/settings/settings"))
const BoostPage = React.lazy(() => import("@pages/boost/boost"))
const ShopPage = React.lazy(() => import("@pages/shop/shop"))
const FriendPage = React.lazy(() => import("@pages/friend/friend"))
const HeadPage = React.lazy(() => import("@pages/head/head"))

export const RouterList: RouterType[] = [
    {
        id: 1,
        path: "/",
        component: HomePage
    }, {
        id: 2,
        path: "/settings",
        component: SettingsPage
    },
    {
        id: 3,
        path: "/boost",
        component: BoostPage
    },
    {
        id: 4,
        path: "/shop",
        component: ShopPage
    },
    {
        id: 5,
        path: "/friends",
        component: FriendPage
    },
    {
        id: 6,
        path: "/head",
        component: HeadPage
    }
]
