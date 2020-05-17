import {ProfileAPI} from "../../api/api";
import {savePhoto, setUserProfile, setUserStatus, updateUserStatus} from "./ProfilePage_Action";
import {stopSubmit} from "redux-form";
import {searchUsers, setCurrentPage} from "../users_page/UsersPage_Action";

export const getUserProfileData = (userId, id) => {
    return async (dispatch, getState) => {
            const data = await ProfileAPI.getProfile(userId, id);
            dispatch(setUserProfile(data));
            getState().usersPage.searchValue && dispatch(setCurrentPage(1));
            dispatch(searchUsers(""));


    }

};

export const getUserStatusData = (userId, id) => {
    return async (dispatch) => {
        const data = await ProfileAPI.getUserStatus(userId, id);
        dispatch(setUserStatus(data));

    }
};
export const updateUserStatusData = (statusText) => {
    return async (dispatch) => {
        const data = await ProfileAPI.setUserStatus(statusText);
        if(data.resultCode===0) {
            dispatch(updateUserStatus(statusText))
        }
    }
};
export const loadPhoto = (photoFile) => {
    return async (dispatch) => {
        const data = await ProfileAPI.loadPhoto(photoFile);
        if(data.resultCode===0) {
            dispatch(savePhoto(data.data.photos))}


    }
};
export const saveProfileData = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id;
        const response = await ProfileAPI.setUserProfileInfo(profile);

        try {
            if (response.status >= 400) throw new Error("Проблемы с сервером")
            if (response.data.resultCode === 0) {
                dispatch(getUserProfileData(userId));
            } else {
                throw new Error(response.data.messages[0]);
            }
        } catch (error) {
            dispatch(stopSubmit("edit-profile", {_error: error.message}));
            return Promise.reject(error.message);
        }
    }
};


