import React, {useEffect, useState} from "react";
import "./FeedCss.css"
import TweetBox from "../TweetBox/TweetBox";
import Post from "./Post/Post";
import db from "../../Firebase";

export default function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    return <div className={"feed"}>
        {/*Header*/}
        <div className={"feed-header"}>
            <h2>Home</h2>
        </div>
        {/*TweetBox*/}
        <TweetBox/>
        {/*Post*/}

            {posts.map(post => (
                <Post
                    key={post.key}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}/>
            ))}


    </div>
}