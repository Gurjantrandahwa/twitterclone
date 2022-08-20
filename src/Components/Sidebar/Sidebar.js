import React from "react";
import "./sidebar.css";
import {
    BookmarkBorder,
    Home, ListAlt,
    MailOutline, MoreHoriz,
    NotificationsNone, PermIdentity,
    Search,
    Twitter
} from "@mui/icons-material";
import SidebarOptions from "../SidebarOptions/SidebarOptions";
import {Button} from "@mui/material";

export default function Sidebar() {
    return <div className={"sidebar"}>
        <Twitter className={"sidebar-twitter-icon"}/>
        <SidebarOptions active Icon={Home} text="Home"/>
        <SidebarOptions Icon={Search} text="Explore"/>
        <SidebarOptions Icon={NotificationsNone} text="Notifications"/>
        <SidebarOptions Icon={MailOutline} text="Messages"/>
        <SidebarOptions Icon={BookmarkBorder} text="Bookmarks"/>
        <SidebarOptions Icon={ListAlt} text="Lists"/>
        <SidebarOptions Icon={PermIdentity} text="Profile"/>
        <SidebarOptions Icon={MoreHoriz} text="More"/>
        <Button className={"sidebar-tweet-btn"} variant={"outlined"} fullWidth>Tweet</Button>
    </div>
}