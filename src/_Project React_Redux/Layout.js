import React, {useEffect} from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import style from "./Layout.module.css"
import HeaderRR from "./_UI/Header/HeaderContainerR_R";
import NavBar from "./_UI/Navbar/Navbar";
import Dialogs from "./_UI/Dialogs/Dialogs";
import {connect} from "react-redux";
import UsersContainer from "./_UI/Users/UsersContainer";
import ProfileContainer from "./_UI/Profile/ProfileContainer";
import Login from "./_UI/Login/Login";
import {compose} from "redux";
import {initializeApp} from "./redux/appInitialized/AppInitialized_Thunk";
import Preloader from "./_UI/common/Preloader/preloader";
import Shop from "./_UI/Shop/Shop";


const App = (props) => {

    useEffect(() => {
        props.initializeApp()

    }, [props]);


    if (!props.initialized) {
        return (
            <div className={style.InitializeWrapper}>
                <div className={style.PreloaderContainer}>
                    <div className={style.PreloaderWrapper}>
                        <Preloader/><Preloader/>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={style.AppWrapper}>
            <HeaderRR/>
            <NavBar/>
            <div className={style.Content}>
                <Route path="/react-redux/dialogs" render={() => <Dialogs/>}/>
                <Route path="/react-redux/profile/:userId?" render={() =>
                    <ProfileContainer/>}/> {/* :userId - параметры из match.params, ? - парам. не обязательный*/}
                <Route path="/react-redux/users" render={() => <UsersContainer/>}/>
                <Route path="/react-redux/login" render={() => <Login/>}/>
                <Route path="/react-redux/shop" render={() => <Shop/>}/>
                <Route exact path="/react-redux/" render={() => (<Redirect to="/react-redux/profile/" />)} />
                {/*{<Redirect from='/react-redux/' to='/react-redux/profile/'/>}*/}
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    initialized: state.appInitialize.initialized,
    userProfile: state.profilePage.userProfile,

});

export default compose(
    withRouter, /* чтоб Route не сбивался*/
    connect(mapStateToProps, {initializeApp})
)(App);