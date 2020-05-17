export const SET_USERS = "SET_USERS";
export const SEARCH_USERS = "SEARCH_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users
});
export const searchUsers = (usersName) => ({
    type: SEARCH_USERS,
    payload: usersName
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage
});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: totalUsersCount
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    payload: isFetching
});
export const follow = (userID) => {
    return{
    type: FOLLOW_USER,
    payload: userID
}};
export const unfollow = (userID) => ({
    type: UNFOLLOW_USER,
    payload: userID
});
export const toggleFollowProgress = (isFollowInProgress, userID) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    payload: [isFollowInProgress, userID]
});

