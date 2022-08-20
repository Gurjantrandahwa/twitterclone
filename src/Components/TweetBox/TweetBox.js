import React, {useState} from "react";
import "./TweetBoxcss.css";
import {Avatar, Button} from "@mui/material";
import db from "../../Firebase";

export default function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName:"Gurjant",
            username:"gurjant",
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:"https://picsum.photos/200"
        });
        setTweetImage("");
        setTweetMessage("")
    }
    return <div className={"tweet-box"}>
        <form>
            <div className={"tweet-box-input"}>
                <Avatar
                    src={"https://picsum.photos/200/300"}/>
                <input
                    placeholder={"What's happening"}
                    value={tweetMessage}
                    onChange={(e) => setTweetMessage(e.target.value)}
                    type={"text"}/>
            </div>
            <input className={"tweet-box-input-image"}
                   placeholder={"Optional : Enter image URL"}
                   value={tweetImage}
                   onChange={(e) => setTweetImage(e.target.value)}
                   type={"url"}/>

            <Button onClick={sendTweet} type={"submit"} className={"tweet-box-button"}>Tweet</Button>
        </form>
    </div>
}