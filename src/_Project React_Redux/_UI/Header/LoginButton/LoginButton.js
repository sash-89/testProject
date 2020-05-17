import React from 'react';
import style from "./Login.module.css"
import {NavLink} from "react-router-dom";
import Button from "../../common/Button/button";


const LoginButton = () => {

    return (
        <div className={style.Container} >
            <div className={style.Wrapper}>
                <NavLink to={"/react-redux/login"}><Button  className={style.Login} value={"Войти"}/></NavLink>
            </div>
        </div>
    );
};

export default LoginButton;