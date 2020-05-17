import React, {useState} from 'react';
import style from './ProfileData.module.css'
import editImg from "./img_194863.png";
import {NavLink} from "react-router-dom"


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue&&<NavLink to={`/${contactValue}`}>{contactValue}</NavLink>} </div>
};

const ProfileData = ({authorizedUserId, userProfile, editMode, setEditMode}) => {
    const {aboutMe, contacts, lookingForAJob, lookingForAJobDescription, fullName}= userProfile;



    const [showContacts, ContactsToggle] = useState(false);
    const menuCls = [style.CloseMenu, style.OpenMenu];
    const contactsCls = [style.ContactsClose, style.ContactsOpen];
    if (showContacts) {
        menuCls.pop();
        contactsCls.pop()
    }


    const menuHandler=()=>{
        ContactsToggle(!showContacts)
    };


    return (
        <>
            {authorizedUserId === userProfile.userId &&
            <img className={style.editImg} src={editImg} title={"Редактировать профиль"}
                 alt="Редактировать профиль" onClick={() => setEditMode(!editMode)}/>}
            <div>
                <b>Полное имя</b>: <p>{fullName}</p>
            </div>
            <div>
                <b>Ищу работу</b>: <p>{lookingForAJob ? "да" : "нет"}</p>
            </div>
            {lookingForAJob &&
            <div>
                <b>Профессиональные навыки</b>: <p>{lookingForAJobDescription}</p>
            </div>
            }

            <div>
                <b>Обо мне</b>:<p>{aboutMe}</p>
            </div>
            <div className={style.ContactsWrapper}>
                <b>Контакные данные <span className={menuCls.join(" ")} onClick={menuHandler}/></b>
                {<div className={contactsCls.join(" ")}>
                    {Object.keys(contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={contacts[key]}/>
                    })}
                </div>}
            </div>
        </>

    );
};

export default ProfileData;
