import React, {useEffect, useState} from 'react';
import Header from "./HeaderR_R";
import {connect} from "react-redux";
import { withRouter} from "react-router-dom";
import { WeatherAPI} from "../../api/api";
import {logoutRequest} from "../../redux/auth/Auth_Thunk";


const HeaderContainer = (props) => {
   let[weather, updateWeather] = useState( null );
   let[IsFetchingWeatherData, changeToggleWeatherData] = useState( false );


    useEffect( ()=>{
      const getWeather = async()=> {
            const data = await WeatherAPI();
            updateWeather(data);
            changeToggleWeatherData(true);
        };
        getWeather()
    }, []);


    return (
        <>

            <Header {...props} weather={weather} logoutRequest={props.logoutRequest} IsFetchingWeatherData={IsFetchingWeatherData}/>
        </>
    );
};

const mapStateToProps = (state) => ({
    id: state.auth.id,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    // fullName: state.profilePage.userProfile.fullName

})

const WithRouterHeaderContainer =withRouter(HeaderContainer)

export default connect (mapStateToProps, { logoutRequest})(WithRouterHeaderContainer);