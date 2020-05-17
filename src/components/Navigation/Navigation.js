import React from 'react';
// import style from './Navigation.module.css';
import {NavLink} from "react-router-dom";

let links = [
    {
        exact: true,
        to: "/",
        linkName: "Home Page"
    },
    {
        exact: false,
        to: "/react-redux",
        linkName: "React Redux"
    },
    {
        exact: false,
        to: "/auth",
        linkName: "Auth Page"
    },
    {
        exact: false,
        to: "/cars",
        linkName: "Cars"
    },
    {
        exact: false,
        to: "/tabs",
        linkName: "Tabs"
    },
    {
        exact: false,
        to: "/quiz",
        linkName: "Quiz"
    },
    {
        exact: false,
        to: "/todo",
        linkName: "To Do"
    },{
        exact: false,
        to: "/todo2",
        linkName: "To Do2"
    },
    {
        exact: false,
        to: "/todo3",
        linkName: "To Do3"
    },
    {
        exact: false,
        to: "/scroll_block",
        linkName: "Scroll Block"
    }, {
        exact: false,
        to: "/scroll_block2",
        linkName: "Scroll Block2"
    },
];


const Navigation =({className, activeClassName}) => {

    return (
            <nav>
                {links.map(({exact, to, linkName}, index)=>{
                    return(
                        <NavLink className={className} key={index} activeClassName={activeClassName} exact={exact} to={to}>{linkName}</NavLink>
                    )
                })}
            </nav>
    )
};

export default Navigation;
