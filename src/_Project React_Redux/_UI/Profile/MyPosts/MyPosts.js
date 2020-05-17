import React from 'react';
import style from './MyPosts.module.css';
import Textarea from "../../common/Textarea/textarea";
import Button from "../../common/Button/button";
import Posts from "./Posts/Posts";


const MyPosts = ({posts, postText, addPost, changePostText}) => {

    const updatePost=(e)=>{
        e.preventDefault();
        if(postText!=="") {
            addPost(postText);
        }

    };

    const textareaHandler=(e)=>{
        changePostText(e.target.value)
    };

    return (
       <div className={style.Container}>
           <form  onSubmit={(e)=>updatePost(e)}>
               <Textarea className={style.PostText} placeholder={"Новый пост"} value={postText} onChange={(e)=>textareaHandler(e)}/>
               <Button className={style.Btn} value={"Добавить пост"}/>
           </form>

           <Posts posts={posts}/>
       </div>
    );
};

export default MyPosts;
