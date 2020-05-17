import React, {useEffect, useMemo, useState} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    getUserProfileData,
    getUserStatusData, loadPhoto,
    saveProfileData,
    updateUserStatusData
} from "../../redux/profile_page/ProfilePage_Thunk";
import {compose} from "redux";
import { updateUserStatus} from "../../redux/profile_page/ProfilePage_Action";

const ProfileContainer = ({authorizedUserId, match,history, userProfile, status, updateUserStatus, getUserProfileData,
                              getUserStatusData, updateUserStatusData, saveProfileData, loadPhoto}) => {
    const [currentUser, toggleCurrentUser] = useState(false);
    let userId = match.params.userId;
    if(!userId) {
        userId=authorizedUserId;
        if(!authorizedUserId){
            history.push("/react-redux/login")
        }
    }

    useEffect( ()=>{
        toggleCurrentUser(false);
        if(userId) getUserProfileData(userId, authorizedUserId)

    }, [authorizedUserId, getUserProfileData, userId]);

    useEffect(() => {
            toggleCurrentUser(!!userProfile)

    }, [userProfile]);

    useEffect(() => {
        toggleCurrentUser(false);
        getUserStatusData(userId, authorizedUserId)

    }, [userId, authorizedUserId, getUserStatusData]);



    return (
       <>
           {<Profile  authorizedUserId={authorizedUserId} userId={userId}
                      currentUser={currentUser} userProfile={userProfile}
                      status={status} updateUserStatus={updateUserStatus}
                      updateUserStatusData={updateUserStatusData}
                      saveProfileData={saveProfileData} loadPhoto={loadPhoto}
           />}
        </>
    );
};

const mapStateToProps =(state)=>({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
});

export default compose(
    connect (mapStateToProps, {updateUserStatus, getUserProfileData, getUserStatusData, updateUserStatusData, saveProfileData, loadPhoto}),
    withRouter
)(ProfileContainer);

