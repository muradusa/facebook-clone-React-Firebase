import React from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"


function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
            profilePic="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkBbxel-voqLUp3tAXXC2rm6aKTM5SRkZCeTgDn6uOyic"
            message="WOW this works"
            timestamp="This is a timestamp"
            username="muradusa"
            image="https://images.unsplash.com/photo-1484263445322-ff82b9cb51cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80
            "
            />
            <Post 
            profilePic="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkBbxel-voqLUp3tAXXC2rm6aKTM5SRkZCeTgDn6uOyic"
            message="WOW this works"
            timestamp="This is a timestamp"
            username="muradusa"
            image="https://images.unsplash.com/photo-1484263445322-ff82b9cb51cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80
            "
            />
        </div>
    )
}

export default Feed


