import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
let links = [
    {
        exact: false,
        to: "/react-redux/profile/",
        linkName: "Profile"
    },
    {
        exact: false,
        to: "/react-redux/dialogs/",
        linkName: "Dialogs"
    },
   {
        exact: false,
        to: "/react-redux/users/",
        linkName: "Users"
    },
    {
        exact: false,
        to: "/react-redux/shop/",
        linkName: "Shop"
    },

];

const NavBar = () => {
    return (
        <nav className={style.NavBar}> {links.map(({exact, to, linkName}, index) => {
                return (
                    <NavLink key={index} activeClassName={style.activeLink} exact={exact} to={to}>{linkName}
                        <img className={style.logo} src="https://riki.dotabuff.com/t/l/SigLD7wvcg.png" alt=""/>
                    </NavLink>
                )
            })}
            {/*<div>*/}
            {/*    <a href="#h">News</a>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <a href="#h2">Music</a>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <a href="#h3">Settings</a>*/}
            {/*</div>*/}
        </nav>

    );
};

export default NavBar;
