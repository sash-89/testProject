import React  from 'react';
import style from './DialogsUsers.module.css';

const users= [
    {id:1, user:"Вася"},
    {id:2, user:"Ваня"},
    {id:3, user:"Валя"},
];

const DialogsUsers = () => {

    return (
       <div className={style.Container}>
           <div className={style.Users}>
               {users.map(user=>{
                   return(
                           <p key={user.id}>{user.user} </p>
                   )
               })}
           </div>
       </div>
    );
};

export default DialogsUsers;
