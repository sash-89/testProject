import {
    FOLLOW_USER,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHING,
    UNFOLLOW_USER,
    TOGGLE_FOLLOWING_PROGRESS, SEARCH_USERS
} from "./UsersPage_Action";


let initialState={
    users:[],
    pageSize:10,                //количество чел. на стр.
    currentPage:1,
    totalUsersCount:0,
    error:null,
    isFetching: false,
    followingInProgress : [],
    searchValue: "",

};


const following = (users, userID, following)=>{
   return users.map(user=>{
        if(user.id===userID) {
            return {...user,  ...following}
        }
        return user
    })
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case SEARCH_USERS:
            return {
                ...state,
                searchValue: action.payload,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.payload
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            };
        case FOLLOW_USER:
            return {
                ...state,
                users: following(state.users, action.payload, {followed:true})
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {...user, followed: false}
                    }
                    return user
                })
            };
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload[0]
                    ? [...state.followingInProgress, action.payload[1]]
                    : state.followingInProgress.filter(id => id !== action.payload[1])
            };

        default:
            return state
    }
};


export default usersReducer;