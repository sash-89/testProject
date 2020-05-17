import React, {useEffect} from 'react';

import {connect} from "react-redux";
import Users from "./Users";
import {searchUsers, setCurrentPage} from "../../redux/users_page/UsersPage_Action";
import {getFollowData, getUnfollowData, getUsersData, searchUsersData} from "../../redux/users_page/UsersPage_Thunk";
import {compose} from "redux";
import withRedirect from "../../hoc/withRedirect";
import {getTotalUsersCount, getUsersSelector} from "../../redux/users_page/UsersPage_Selectors";
import {withRouter} from "react-router-dom";
import * as queryString from "query-string";


const UsersContainer = React.memo(({history, location, users, pageSize, currentPage, totalUsersCount, isFetching,
                                       followingInProgress, searchValue, searchUsers, getUsersData,
                                       getFollowData, getUnfollowData, searchUsersData }) => {

    let params = queryString.parse(location.search);

    const term= searchValue ? searchValue : params.term;
    const count= params.count ? +params.count : pageSize;
    const page= params.page ? +params.page : currentPage;


    useEffect(() => {
        !params.term ? getUsersData(count, page)
:searchUsersData(count, page, term);
// :searchUsersData(count, page>pagesCount ? 1 : page, term);

        history.push({pathname: location.pathname,
            search: term ?`term=${term}&count=${count}&page=${page}`: `count=${count}&page=${page}`,
        })

    }, [params.term, ]);

    const onPageChange = (currentPage) => {
        term ? searchUsersData(count, currentPage, term) : getUsersData(count, currentPage)
        history.push({pathname: location.pathname,
            search: term ?`term=${term}&count=${count}&page=${currentPage}`: `count=${count}&page=${currentPage}`,
        })
    };

    const searchHandler=()=>{
        searchUsersData(count, 1, term);
        history.push({pathname: location.pathname,
            search: `term=${term}&count=${count}&page=${page}`,
        })
    };


    return (
        <Users users={users} pageSize={count} currentPage={currentPage} isFetching={isFetching} searchValue={searchValue}
               totalUsersCount={totalUsersCount} followingInProgress={followingInProgress} searchUsers={searchUsers}
               onPageChange={onPageChange} getFollowData={getFollowData} getUnfollowData={getUnfollowData}
               searchHandler={searchHandler} //pageSize
        />
    )

});
const MapStateToProps = (state) => ({
    users: getUsersSelector(state),
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: getTotalUsersCount(state),
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    searchValue: state.usersPage.searchValue,
});


export default compose(connect(MapStateToProps,
    {setCurrentPage, searchUsers, getUsersData, getFollowData, getUnfollowData, searchUsersData}),
    withRedirect,
    withRouter
)(UsersContainer);
