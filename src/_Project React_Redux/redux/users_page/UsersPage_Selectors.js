import {createSelector} from "reselect";

const getUsers= (state) => {
    return state.usersPage.users
};

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true);
});



export const getCurrentPage = (state) => {
    return state.usersPage.pageSize
};
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};
export const getIsFetching = (state) => ({
    isFetching: state.usersPage.isFetching
});
export const getFollowProgress = (state) => ({
    followingInProgress: state.usersPage.followingInProgress
});

