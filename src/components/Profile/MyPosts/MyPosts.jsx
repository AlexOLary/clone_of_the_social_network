import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={s.posts}>
            <Post message='Hi, how are React?' LikesCount='7'/>
            <Post message="Very well" LikesCount='12'/>
        </div>
    </div>
}

export default MyPosts;