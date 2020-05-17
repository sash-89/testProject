import React from 'react';
import likesImg from "../likemessage_81127.ico"
import style from './Posts.module.css';

const Posts = ({posts}) => {

    return (
           <div className={style.Posts}>
               {[...posts].reverse().map(post=>{
                   return(
                       <div key={post.id}>
                           <p key={post.id}>{post.post} </p>
                           <span>{post.likesCount}<img src={likesImg} alt=""/></span>
                       </div>
                   )
               })}
           </div>
    );
};

export default Posts;
