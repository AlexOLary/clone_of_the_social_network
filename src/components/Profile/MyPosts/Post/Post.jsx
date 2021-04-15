import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return <div>
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJTcYFdKdHZCkOxvGGIEEfyF1y9lVQImp6g&usqp=CAU'/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    </div>
}

export default Post;