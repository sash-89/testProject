import React, {useEffect, useState} from 'react';
import style from './Users.module.css'
import Button from "../common/Button/button"
import avaImg from "./img_504586.png"
import searchIco from "./search.png"
import Preloader from "../common/Preloader/preloader";
import {NavLink} from "react-router-dom";
import PaginationMode from "./PaginationMode/PaginationMode";



const Users = ({users, pageSize, currentPage,  totalUsersCount, isFetching, searchValue, onPageChange, searchUsers,
                   followingInProgress, getFollowData, getUnfollowData, searchHandler}) => {

    const [placeholderToggle, changePlaceholderToggle] = useState(false);
    const [toggle, changeTog] = useState(true);

    const text = "Поиск пользовател...";
    const [intro, setIntro] = useState({characters: "", charCount: 0});
    const {characters, charCount} = intro;

    const [symbol, setSymbol] = useState("|");


    useEffect(() => {
        let timer;
        let i = 0;
            if (!searchValue) {
                if (placeholderToggle) {
                    timer = setInterval(() => {
                        i++;
                         setSymbol(i % 2 === 0 ?"|"  : "")
                    }, 200)
                }

                return () => {
                    clearInterval(timer)
                }
            }
        }
        , [searchValue, placeholderToggle]);


    useEffect(()=>{

        const updateIntro = {
            ...intro,
            charCount:  toggle ? charCount + 1 : charCount !== 0 ? charCount - 1 : 0,
            characters: toggle ? characters + text[charCount] : characters.slice(0, charCount)
        };

        const plcMaxLength = characters.length === text.length-1;
        const plcLengthNull = characters.length === 0;

        let timer;
        if (!searchValue){
            if (placeholderToggle) {
               timer = setInterval(() => {setIntro( updateIntro )}, toggle ? 200 : 50);

                if (plcMaxLength)changeTog(false);
                if (plcLengthNull)changeTog(true )
            } else return () => {
                clearInterval(timer);
                setIntro({characters: "", charCount: 0});
                changeTog(true)
            }

        } else {
            changePlaceholderToggle(false);
            return () => {
                changePlaceholderToggle(true)
           };
        }

        return () => {
            clearInterval(timer)
        }
    }, [charCount, characters, intro, placeholderToggle, searchValue, toggle]);



    const handlePageChange = (pageNumber) => {
        onPageChange(pageNumber);
    };
    const searchChangeHandler = ({target:{value}}) => {
        searchUsers(value);
        // searchUsersData(pageSize, 1, value) //вывод при наборе
    };


    const followHandler = (userId) => {
        getFollowData(userId)
    };

    const unfollowHandler = (userId) => {
        getUnfollowData(userId)
    };

    const submit=(e)=>{
        e.preventDefault();
        searchHandler()
    };

    return (
        <div className={style.Container}>
            {!isFetching?<><Preloader/><Preloader/></>:
                <PaginationMode pageSize={pageSize} currentPage={currentPage} totalUsersCount={totalUsersCount}
                                handlePageChange={handlePageChange}/>}

            <div className={style.SearchBlock} onMouseOver={()=>changePlaceholderToggle(true)} onMouseLeave={()=>{changePlaceholderToggle(false)}} >
                <form className={style.SearchWrapper} onSubmit={(e) =>submit(e) }>
                    <input type="search" placeholder={`${characters}${symbol}`} value={searchValue}
                           onChange={(e) => searchChangeHandler(e)}/>
                   <img src={searchIco} alt=""/>
                </form>
            </div>

            <div className={style.Wrapper}>
                {users.map((user)=>{
                    return (
                        <div key={user.id} className={style.Profile}>
                           <NavLink to={`/react-redux/profile/${user.id}`}> <img src={user.photos.small?user.photos.small:avaImg} alt=""/></NavLink>
                            <div className={style.Info}>
                                <p>Имя пользователя: {user.name}</p>
                                <p>Статус: {user.status}</p>
                            </div>
                            {user.followed
                                ? <Button disabled={followingInProgress.some(id=> id===user.id)} className={style.Btn}
                                        onClick={() => unfollowHandler(user.id)} value={"Отписаться"}/>
                                : <Button disabled={followingInProgress.some(id=> id===user.id)} className={style.Btn}
                                        onClick={() => followHandler(user.id)} value={"Подписаться"}/>
                            }
                        </div>
                    )
                })}
            </div>

        </div>
    )

};


export default Users;
