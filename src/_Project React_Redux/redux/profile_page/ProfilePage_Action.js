export const ADD_POST = "ADD_POST";
export const CHANGE_POST_TEXT = "CHANGE_POST_TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const GET_STATUS = "GET_STATUS";
export const SET_STATUS = "SET_STATUS";
export const SAVE_PHOTO = "SAVE_PHOTO";



export const addPost = (newPost) => ({
    type: ADD_POST,
    payload: newPost
});
export const changePostText = (text) => ({
    type: CHANGE_POST_TEXT,
    payload: text
});
export const setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE,
    payload: userProfile
});
export const setUserStatus = (userId) => ({
    type: GET_STATUS,
    payload: userId
});
export const updateUserStatus = (statusText) => ({
    type: SET_STATUS,
    payload: statusText
});
export const savePhoto = (photos) => ({
    type: SAVE_PHOTO,
    payload: photos
});
