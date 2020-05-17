import React from 'react';
import style from './Login.module.css';
import close from './x-circle.png';
import logo from './logo.png';
import gosUslugiIco from './gosUslugiIco.png';
import vkIco from './vkIco.png';
import facebookIco from './facebookIco.png';
import googleIco from './googleIco.png';
import pIco from './pIco.png';
import instagmIco from './instagIco.png';
import {NavLink} from "react-router-dom";

const LogIn =() => {

    return (
        <div className={style.Container}>
            <div className={style.Wrapper}>
                <div className={style.LogoContainer}>
                    <div className={style.LogoWrapper}>
                        <NavLink to={"/"}>
                            <img className={style.Logo} src={logo} alt={"Home Page"}/></NavLink>
                    </div>
                </div>
                <div className={style.LoginContainer}>
                    <div className={style.LoginWrapper}>
                        <div className={style.Close}>
                            <img src={close} alt=""/>
                        </div>
                        <div className={style.h1Wrapper}>
                            <h1>Вход</h1>
                        </div>
                        <div className={style.EmailContainer}>
                            <div className={style.EmailCaptionWrapper}>
                                <div className={style.EmailCaption}>
                                    Адрес электронной почты
                                </div>
                            </div>
                            <div className={style.EmailWrapper}>
                                <input className={style.EmailInput} type="text" placeholder={"example@mail.ru"} />
                            </div>
                        </div>

                        <div className={style.PasswordContainer}>
                            <div className={style.PasswordCaptionWrapper}>
                                <div className={style.PasswordCaption}>
                                    Пароль
                                </div>
                            </div>
                            <div className={style.PasswordWrapper}>
                                <input className={style.PasswordInput} type="password" />
                            </div>
                        </div>
                        <div className={style.BtnWrapper}>
                            <button className={style.Btn}>Войти</button>
                        </div>

                        <div className={style.SingUpCaptionWrapper}>
                            <div className={style.SingUpCaption}>
                                Еще нет аккаунта?
                                <NavLink to={"/sing_up"}> Зарегистрируйтесь!</NavLink>  Или войдите через соцсети и Госуслуги
                            </div>
                        </div>
                        <div className={style.IconsWrapper}>
                            <div className={style.Icons}>
                                <img src={gosUslugiIco} alt="ГосУслуги"/>
                                <img src={vkIco} alt="VK"/>
                                <img src={facebookIco} alt="Facebook"/>
                                <img src={googleIco} alt="Google"/>
                                <img src={pIco} alt="P"/>
                                <img src={instagmIco} alt="Instagram"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LogIn;