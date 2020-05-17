import {ADD_POST, CHANGE_POST_TEXT, GET_STATUS, SAVE_PHOTO, SET_STATUS, SET_USER_PROFILE} from "./ProfilePage_Action";


let initialState = {
    posts: [
        {id: 1, post: "Все хорошо", likesCount: 5},
        {id: 2, post: "Привет всем", likesCount: 3},
        {id: 3, post: "Все круто", likesCount: 1},
    ],
    postText: "",
    userProfile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: (new Date().getTime()), post: action.payload, likesCount: 0}],
                postText: '',
            };

        case CHANGE_POST_TEXT:
            return {
                ...state,
                postText: action.payload,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload,
            };
        case GET_STATUS:
            return {
                ...state,
                status: action.payload,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.payload,
            };
        case SAVE_PHOTO:
            debugger
            return {...state, userProfile: {...state.userProfile, photos: action.payload}}
        default:
            return state
    }
};


export default profileReducer;