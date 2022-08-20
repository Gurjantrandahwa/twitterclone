import React from "react";
import "./Widgetscss.css";
import {Search} from "@mui/icons-material";
import {TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed";

export default function Widgets() {
    return <div className={"widgets"}>
        <div className={"widgets-input"}>
            <Search className={"widgets-searchIcon"}/>
            <input placeholder={"Search Twitter"}
                   type={"text"}/>
        </div>
        <div className={"widgets-WidgetsContainer"}>
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId={"858551177860055040"}/>
            <TwitterTimelineEmbed sourceType={"profile"}
                                  screenName={"gur"}
                                  options={{height: 400}}
            />
            <TwitterShareButton url={"https://facebook.com/cleverprogrammer"}
            options={{text:"#react js is awesome",via:"gurjant"}}/>
        </div>
    </div>

}