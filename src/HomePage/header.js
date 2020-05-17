import React from 'react';
import style from './Header.module.css';
import Navigation from "../components/Navigation/Navigation";

const Header =() => {

    return (
        <div className={style.Header}>
            <Navigation className={style.headerNav} activeClassName={style.headerActiveLink}/>
        </div>
    )
};

export default Header;