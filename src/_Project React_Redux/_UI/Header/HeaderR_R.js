import React, { useState} from 'react';
import style from "./HeaderR_R.module.css"
import Weather from "./Weather/Weather";
import LoginButton from "./LoginButton/LoginButton";
import Button from "../common/Button/button";

const Header = ({history, id, weather, login, isAuth,  IsFetchingWeatherData, logoutRequest}) => {
    const [menu, menuToggle] = useState(false);
    const menuCls = [style.CloseMenu, style.OpenMenu];
    if (menu) menuCls.pop();

    const onClickHandler=()=>{
        history.push({pathname: `/react-redux/profile/${id}`})
    };

    const menuHandler=()=>{
        menuToggle(!menu)
    };


    const logout = () => {
        logoutRequest();
        menuToggle(!menu)
    };

   const renderUserName= (
       <div className={style.Login}>
           <p onClick={onClickHandler}>{login}</p>
           <span className={menuCls.join(" ")} onClick={menuHandler}/>
           {menu&&<div className={style.Menu}>
               <Button onClick={logout} value={"Выход"}/>
           </div>}
       </div>
   )

    return (
        <header className={style.header} >
            <div className={style.Wrapper}>
                <div className={style.Weather}>
                    {IsFetchingWeatherData&&<Weather weather={weather}/>}
                </div>
                <div className={style.Logo}>
                    <img src='https://riki.dotabuff.com/t/l/SigLD7wvcg.png' alt='logo'/>
                </div>
                <div className={style.LoginWrapper}>
                    {isAuth ? renderUserName : <LoginButton />}
                </div>
            </div>
        </header>
    );
};

export default Header;