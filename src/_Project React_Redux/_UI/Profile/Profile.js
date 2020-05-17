import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/preloader";

const Profile = ({authorizedUserId, userId,userProfile, currentUser, status, updateUserStatus, updateUserStatusData, saveProfileData, loadPhoto}) => {
    return (
       <div className={style.Container}>
           <div className={style.ImgWrapper}/>
           { (!userProfile||!currentUser)?<div className={style.Preloader}><Preloader/><Preloader/></div>:
               <>
           <div className={style.ProfileInfo}>
               <ProfileInfo authorizedUserId={authorizedUserId} userId={userId} userProfile={userProfile} status={status}
                            updateUserStatus={updateUserStatus} updateUserStatusData={updateUserStatusData}
                            saveProfileData={saveProfileData} loadPhoto={loadPhoto}/>
           </div>
           <div className={style.MyPosts}>
               <MyPostsContainer/>
           </div>
           </>
}
       </div>

    );
};

export default Profile;
