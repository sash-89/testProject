import React from 'react';
import style from './Dialogs.module.css';
import DialogsUsers from "./DialogUsers/DialogsUsers";
import MessagesContainer from "./Messages/MessagesContainer";
import withRedirect from "../../hoc/withRedirect";


const Dialogs = () => {

    return (
       <div  className={style.Container}>
           <div className={style.DialogsUsers}>
               <DialogsUsers/>
           </div>
           <div className={style.Messages}>
               <MessagesContainer/>
           </div>

       </div>
    );
};

export default Dialogs;
