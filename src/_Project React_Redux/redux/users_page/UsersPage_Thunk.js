import {userAPI} from "../../api/api";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowProgress,
    toggleIsFetching, unfollow
} from "./UsersPage_Action";


const setUsersData = (fetchMethod, pageSize, currentPage, UserName) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(false));
        dispatch(setCurrentPage(currentPage));
            const data = await fetchMethod(pageSize, currentPage, UserName);
            const users = await data.items;
            dispatch(toggleIsFetching(true));
            dispatch(setUsers(users));
            dispatch(setTotalUsersCount(data.totalCount))
        };
};
export const getUsersData = (pageSize, currentPage) => {
    return setUsersData(userAPI.getUsers, pageSize, currentPage)
};

export const searchUsersData = (pageSize, currentPage=1, userName) => {
    return setUsersData(userAPI.searchUsers, pageSize, currentPage, userName)

};




const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowProgress(true, userId));
    const data = await apiMethod(userId);

    if (data.resultCode===0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowProgress(false, userId));
};
export const getFollowData = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.followUser.bind(userAPI), follow);
    }
};
export const getUnfollowData = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.unfollowUser.bind(userAPI), unfollow);
    }
};



